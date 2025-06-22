import { useNavigate, useParams } from "react-router";

const CreateInteraction = () => {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <div>
        <select>
          <option>Call</option>
          <option>Text</option>
          <option>Email</option>
        </select>
      </div>
      <div>
        <input placeholder="content" />
      </div>
      <button onClick={() => nav(`/client/${id}`)}>Back to client</button>
    </div>
  );
};

export default CreateInteraction;
