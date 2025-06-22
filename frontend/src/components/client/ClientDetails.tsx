import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SelectClientDetails } from "../../util/clientUtil";
import { Client } from "../../types";
import { PostgrestError } from "@supabase/supabase-js";

const ClientDetails = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState<Client>({
    id: "",
    company: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    created_at: "",
    user_id: "",
  });

  useEffect(() => {
    (async () => {
      const res = await SelectClientDetails(id ?? "");
      if (res instanceof PostgrestError) {
        return;
      }

      setClient(res);
    })();
  }, []);

  return (
    <div>
      <div>{client.company}</div>
      <div>{client.first_name}</div>
      <div>{client.last_name}</div>
      <div>{client.email}</div>
      <div>{client.phone}</div>
      <button
        onClick={() => {
          nav("interaction/create");
        }}
      >
        New Interaction
      </button>
      <button
        onClick={() => {
          nav("/dashboard");
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ClientDetails;
