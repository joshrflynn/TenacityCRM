import {
  Context,
  createContext,
  JSX,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../util/supabaseClient";
import { User } from "@supabase/supabase-js";

export const AuthContext: Context<User | null> = createContext<User | null>(
  null
);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch initial user session once
    const getUserSession = async () => {
      const storedUser = localStorage.getItem("authUser");
      if (storedUser) {
        console.log("user found in storage");
        setUser(JSON.parse(storedUser));
      } else {
        console.log("user not found in storage, authing from supa");
        setUser((await supabase.auth.getSession()).data.session?.user ?? null);
      }
    };
    getUserSession();

    // Subscribes to user state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("user session state changed");
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // Save to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      console.log("writing to storage");
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      console.log("removing to storage");
      localStorage.removeItem("authUser");
    }
  }, [user]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
