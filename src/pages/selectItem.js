import { useState } from "react";


import { useNavigate } from "react-router-dom";

function SelectItem() {
  const [item, setItem] = useState("");
  const navigate = useNavigate();


  const handleNext = () => {
    if (!item) {
      alert("Please select an item.");
      return;
    }
    localStorage.setItem("selectedItem", item);
    navigate("/add-details"); // Move to next page
  };

  return (
<div style={{padding:'20px'}}>
      <h1>Select Item</h1>
      <select style={{marginRight:'20px', padding:'10px', borderRadius:'6px'}} value={item} onChange={(e) => setItem(e.target.value)}>
        <option value="">Select Item</option>
        <option value="Website Design">Website Design</option>
        <option value="SEO Optimization">SEO Optimization</option>
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default SelectItem;
