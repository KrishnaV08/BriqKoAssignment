import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/viewBill.css";

function ViewBills() {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    if (!window.confirm("Are you sure you want to delete all the bills?"))
      return;
    localStorage.removeItem("bills"); // Remove from storage
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
    <div className="view-bills-container">
      <h1>Submitted Bills</h1>

      {bills.length === 0 ? (
        <>
          <p>No bills added yet.</p>
          <button
          style={{
            width:"10%"
          }}
            class="add-bill-btn"
            onClick={() => navigate("/select-client")}
          >
            Add Bills
          </button>
        </>
      ) : (
        <ul className="bill-list">
          {bills.map((bill, index) => (
            <li key={index} className="bill-item">
              <span>
                <strong>Client:</strong> {bill.client}
              </span>
              <span>
                <strong>Item:</strong> {bill.item}
              </span>
              <span>
                <strong>Description:</strong> {bill.description}
              </span>
              <span>
                <strong>Brief:</strong> {bill.brief}
              </span>
              <span>
                <strong>Measurement:</strong> {bill.measurement}
              </span>
              <span>
                <strong>Date:</strong> {bill.date}
              </span>
              <button className="delete-btn" onClick={() => deleteBill(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

{bills.length > 0 && (
            <button className="delete-all-btn" onClick={handleDeleteAll}>
              Delete All Bills
            </button>
          )}
      <button className="home-btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default ViewBills;
