import { useNavigate } from "react-router";
import { signOutAsync } from "../../util/authUtil";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { Client } from "../../types";
import { SelectUserClients } from "../../util/clientUtil";
import { PostgrestError } from "@supabase/supabase-js";

const Dashboard = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);

  // get a list of all clients with the user
  useEffect(() => {
    (async () => {
      const res = await SelectUserClients(auth!.id);
      if (res instanceof PostgrestError) {
        // handle error here
      } else {
        setClients(res);
      }
    })();
  }, [auth]);

  return (
    <div>
      <div>
        Dashboard for user: {auth?.user_metadata.first_name}{" "}
        {auth?.user_metadata.last_name}
      </div>
      <div>
        {clients.map((x) => {
          return (
            <button
              onClick={() => {
                nav(`/client/${x.id}`, { state: { client: x } });
              }}
            >
              {x.company}
            </button>
          );
        })}
      </div>
      <button
        onClick={async () => {
          await signOutAsync();

          // user should be signed out
          nav(`/signin`);
        }}
      >
        Sign Out
      </button>
      <button onClick={() => nav("/client/create")}>Create Client</button>
    </div>
  );
};

export default Dashboard;
