import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewBills() {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    if (!window.confirm("Are you sure you want to delete all the bills?"))
      return;
    localStorage.removeItem("bills"); // Remove bills from local storage
    setBills([]); // Clear state
  };

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storedBills);
  }, []);

  const deleteBill = (index) => {
    if (!window.confirm("Are you sure you want to delete this bill?")) return;

    const updatedBills = bills.filter((_, i) => i !== index);
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Submitted Bills</h1>

      {bills.length === 0 ? (
        <>
          <p>No bills added yet.</p>
          <button onClick={() => navigate("/select-client")}>Add Bills</button>
        </>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
  {bills.map((bill, index) => (
    <li
      key={index}
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 2fr 1fr",
        gap: "10px",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#f9f9f9",
      }}
    >
      <span><strong>Client:</strong> {bill.client}</span>
      <span><strong>Item:</strong> {bill.item}</span>
      <span><strong>Description:</strong> {bill.description}</span>
      <span><strong>Brief:</strong> {bill.brief}</span>
      <span><strong>Measurement:</strong> {bill.measurement}</span>
      <span><strong>Date:</strong> {bill.date}</span>
      <button
        onClick={() => deleteBill(index)}
        style={{
          background: "red",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>

      )}
      <button className="delete-all" onClick={handleDeleteAll}>
        Delete All Bills
      </button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default ViewBills;
