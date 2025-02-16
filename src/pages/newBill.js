import { useNavigate } from "react-router-dom";

function NewBill() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create New Bill</h1>
      <button onClick={() => navigate("/select-client")}>Next</button>
    </div>
  );
}

export default NewBill;
