import { AuthError, User } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { SignUpUserInfo } from "../types";

export const signUpAsync = async (
  userInfo: SignUpUserInfo
): Promise<User | AuthError> => {
  const { data, error } = await supabase.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
    options: { data: { ...userInfo.options } },
  });
  return error ?? data.user!;
};

export const signInAsync = async (
  email: string,
  password: string
): Promise<User | AuthError> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return error ?? data.user;
};

export const signOutAsync = async (): Promise<{ error: AuthError | null }> => {
  return await supabase.auth.signOut();
};
