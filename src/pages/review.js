import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewBills() {
  const [bills, setBills] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch bills from local storage
    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storedBills);
  }, []);

  return (
    <div>
      <h1>Submitted Bills</h1>
      {bills.length === 0 ? (
        <p>No bills added yet.</p>
      ) : (
        <ul>
          {bills.map((bill, index) => (
            <li key={index}>
              <strong>Description:</strong> {bill.description} <br />
              <strong>Brief:</strong> {bill.brief} <br />
              <strong>Measurement:</strong> {bill.measurement} <br />
              <strong>Date:</strong> {bill.date}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")}> HOME</button>
    </div>
  );
}

export default ViewBills;
