import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', height: '100vh', background:
        "linear-gradient(180deg,rgba(130, 217, 199, 1) 15%, rgba(30, 30, 30, 1) 100%)",
    }}>
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
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>Welcome to Tenacity CRM</div>
        <div style={{ fontSize: '30px' }}>Streamline your client management experience</div>
      </div >
      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%' }}>
        <button
          onClick={() => {
            nav("/signin");
          }}
          style={{ fontSize: '24px', borderRadius: '25px', padding: '15px' }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            nav("/signup");
          }}
          style={{ fontSize: '24px', borderRadius: '25px', padding: '15px' }}


        >
          Sign Up
        </button>
      </div>
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
    </div >

  );
};

export default Home;
