import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();

  return (
    <div>
      <div>Home</div>
      <button
        onClick={() => {
          nav("/signin");
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          nav("/signup");
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Home;
