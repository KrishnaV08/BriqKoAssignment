import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectClient() {
  const [client, setClient] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!client) {
      alert("Please select a client.");
      return;
    }
    localStorage.setItem("selectedClient", client);
    navigate("/select-item"); // Move to next page
  };

  return (
    <div style={{padding:'20px'}}>
      <h1>Select Client</h1>
      <select style={{marginRight:'20px', padding:'10px', borderRadius:'6px'}} value={client} onChange={(e) => setClient(e.target.value)}>
        <option value="">Select Client</option>
        <option value="ABC Corp">ABC Corp</option>
        <option value="XYZ Ltd">XYZ Ltd</option>
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default SelectClient;
