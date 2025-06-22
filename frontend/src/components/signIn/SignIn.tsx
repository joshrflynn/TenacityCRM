import { AuthError, User } from "@supabase/supabase-js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signInAsync } from "../../util/authUtil";
import { CreateValidationMessage } from "../../util/validationUtil";

const SignIn = () => {
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("testtest");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  let nav = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const res: User | AuthError = await signInAsync(email, password);
    if (res instanceof AuthError) {
      // redirect to error page
      console.dir(res);
      setError(CreateValidationMessage(res.message));
      return;
    }

    // navigate signed in user
    setError(null);
    nav(`/dashboard`);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        justifyItems: "stretch",
        alignItems: "center",
        background:
          "linear-gradient(180deg,rgba(130, 217, 199, 1) 15%, rgba(30, 30, 30, 1) 100%)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F4F3EE",
          padding: "12px",
          width: "100%",
          justifyContent: "center",
          borderBottom: "1px solid black",
        }}
      >
        <img
          src="/img/handshake-logo.svg"
          style={{ height: "72px", marginRight: "15px" }}
          alt="Tenacity Logo"
        />
        <span
          style={{
            fontSize: "48px",
          }}
        >
          Tenacity CRM
        </span>
      </div>
      {/* Form */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          height: "35%",
          width: "100%",
        }}
      >
        {error && (
          <div
            style={{
              width: "auto",
              padding: "10px",
              fontSize: "18px",
              backgroundColor: "#e87979",
              borderRadius: "15px",
              position: "absolute",
              top: "-50px",

              border: "1px solid black",
            }}
          >
            {error}
          </div>
        )}
        <div
          style={{
            boxShadow: "3px 3px 20px black",
            height: "100%",
            width: "35%",
            backgroundColor: "#F4F3EE",
            borderRadius: "20px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            Login to your Account
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              justifyContent: "space-evenly",
            }}
            onSubmit={handleSignIn}
          >
            <div>
              <label style={{ display: "block", marginBottom: "3px" }}>
                Email
              </label>
              <input
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid silver",
                }}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "3px" }}>
                Password
              </label>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  required
                  style={{
                    width: "100%",
                    padding: "10px 30px 10px 10px",
                    borderRadius: "5px",
                    border: "1px solid silver",
                  }}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <img
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    position: "absolute",
                    right: "10px",
                    height: "15px",
                  }}
                  src={
                    showPassword
                      ? "/img/show-password.svg"
                      : "/img/hide-password.svg"
                  }
                  alt={showPassword ? "show password" : "hide password"}
                />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={() => nav("/")}
                type="button"
                style={{
                  backgroundColor: "#BCB8B1",
                  padding: "5px 15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  border: "1px solid grey",
                }}
              >
                Back
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "#A1FFDE",
                  padding: "5px 15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  border: "1px solid grey",
                }}
              >
                Sign In
              </button>
            </div>
          </form>
          <div style={{ textAlign: "center" }}>
            New to Tenacity? Sign up <a href="signup">here</a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#1A1A1A",
          color: "#F4F3EE",
          padding: "10px 0",
          textAlign: "center",
          borderTop: "1px solid #82D9C7",
        }}
      >
        &copy; 2025 Tenacity CRM
      </div>
    </div>
  );
};

export default SignIn;
