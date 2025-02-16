import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bill Management System</h1>
      <button onClick={() => navigate("/select-client")}>
        Create New Bill
      </button>
      <button onClick={() => navigate("/view-bills")}> View Bills </button>
    </div>
  );
}

export default Start;
