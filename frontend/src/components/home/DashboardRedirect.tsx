import { JSX, useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";

const DashboardRedirect = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const nav = useNavigate();
  const [canShow, setCanShow] = useState(false);

  // redirect to the dashboard if the user is already signed in
  useEffect(() => {
    console.log(auth);
    if (auth) {
      nav("/dashboard", { replace: true });
    }
    setCanShow(true);
  }, [auth]);

  // Hides the page until it determines which page to show, prevents flashing before rendering the dashboard
  if (!canShow) return null;
  return children;
};

export default DashboardRedirect;
