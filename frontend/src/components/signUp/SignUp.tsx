import { AuthError, User } from "@supabase/supabase-js";
import { signUpAsync } from "../../util/authUtil";
import { useState } from "react";
import { SignUpUserInfo } from "../../types";
import { useNavigate } from "react-router";

const SignUp = () => {
  const nav = useNavigate();

  const [userInfo, setUserInfo] = useState<SignUpUserInfo>({
    email: "",
    password: "",
    options: {
      first_name: "",
      last_name: "",
    },
  });

  return (
    <div>
      <div>
        <input
          placeholder="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          placeholder="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <input
          placeholder="first name"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              options: { ...userInfo.options, first_name: e.target.value },
            })
          }
        />
        <input
          placeholder="last name"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              options: { ...userInfo.options, last_name: e.target.value },
            })
          }
        />
      </div>

      <button
        onClick={async () => {
          const res: User | AuthError = await signUpAsync(userInfo);
          if (res instanceof AuthError) {
            // redirect to error page
            console.warn(res);

            return;
          }

          // user should already be signed in, just need to naviagate
          console.log(res);
          nav(`/dashboard/${res.id}`);
        }}
      >
        Sign up
      </button>
      <button onClick={() => nav("/")}>Back</button>
    </div>
  );
};

export default SignUp;
