import { useState } from "react";
import "../styles/addDet.css";
import { useNavigate } from "react-router-dom";

function AddDetails() {
  const [description, setDescription] = useState("");
  const [brief, setBrief] = useState("");
  const [measurement, setMeasurement] = useState("");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today); // Default to today's date

  const navigate = useNavigate();

  const handleSubmit = () => {
    const client = localStorage.getItem("selectedClient");
    const item = localStorage.getItem("selectedItem");

    if (!client || !item) {
      alert("Client or item missing! Please restart the process.");
      navigate("/");
      return;
    }

    const newBill = {
      client,
      item,
      description,
      brief,
      measurement,
      date, // Store the selected date
    };

    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    const updatedBills = [...storedBills, newBill];
    localStorage.setItem("bills", JSON.stringify(updatedBills));

    localStorage.removeItem("selectedClient");
    localStorage.removeItem("selectedItem");

    navigate("/view-bills");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Details</h1>
      <input
        style={{ marginRight: "20px", padding: "10px", borderRadius: "6px" }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        style={{ marginRight: "20px", padding: "10px", borderRadius: "6px" }}
        type="text"
        placeholder="Brief"
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
      />
      <input
        style={{ marginRight: "20px", padding: "10px", borderRadius: "6px" }}
        type="number"
        placeholder="Measurement"
        value={measurement}
        onChange={(e) => setMeasurement(e.target.value)}
      />

      <input
        style={{ marginRight: "20px", padding: "10px", borderRadius: "6px" }}
        type="date"
        value={date}
        max={today} // Restricts selection to past and present dates
        onChange={(e) => setDate(e.target.value)}
      />
      <button class="save" onClick={handleSubmit}>Save Bill</button>
    </div>
  );
}

export default AddDetails;
