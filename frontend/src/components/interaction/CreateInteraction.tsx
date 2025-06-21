const CreateInteraction = () => {
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
    </div>
  );
};

export default CreateInteraction;
