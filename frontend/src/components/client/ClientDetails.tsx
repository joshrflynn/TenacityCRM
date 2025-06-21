import { useLocation, useNavigate } from "react-router";

const ClientDetails = () => {
  const { state } = useLocation();
  const nav = useNavigate();

  return (
    <div>
      <div>{state.client.company}</div>
      <div>{state.client.first_name}</div>
      <div>{state.client.last_name}</div>
      <div>{state.client.email}</div>
      <div>{state.client.phone}</div>
      <button
        onClick={() => {
          //create new interaction
        }}
      >
        New Interaction
      </button>
      <button
        onClick={() => {
          nav("dashboard");
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ClientDetails;
