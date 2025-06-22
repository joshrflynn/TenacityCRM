import { useState } from "react";
import { Client, CreateClientInfo } from "../../types";
import { InsertClient } from "../../util/clientUtil";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { PostgrestError } from "@supabase/supabase-js";

const CreateClient = () => {
  const auth = useAuth();
  const nav = useNavigate();

  const [clientInfo, setClientInfo] = useState<CreateClientInfo>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    user_id: auth!.id,
  });

  return (
    <div>
      <div>
        <input
          placeholder="first name"
          onChange={(e) => {
            setClientInfo({ ...clientInfo, first_name: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          placeholder="last name"
          onChange={(e) => {
            setClientInfo({ ...clientInfo, last_name: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          placeholder="email"
          onChange={(e) => {
            setClientInfo({ ...clientInfo, email: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          placeholder="phone"
          onChange={(e) => {
            setClientInfo({ ...clientInfo, phone: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          placeholder="company"
          onChange={(e) => {
            setClientInfo({ ...clientInfo, company: e.target.value });
          }}
        />
      </div>
      <button
        onClick={async () => {
          const res = await InsertClient(clientInfo);
          if (res instanceof PostgrestError) {
            // handle error
          }
          // redirect to client details page, for now redirect to dashboard
          nav(`/client/${(res as Client).id}`);
        }}
      >
        Create Client
      </button>
    </div>
  );
};

export default CreateClient;
