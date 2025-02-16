import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./pages/navbar";
import Start from "./pages/start";
import SelectClient from "./pages/selectClient";
import SelectItem from "./pages/selectItem";
import AddDetails from "./pages/addDetails";
import ViewBills from "./pages/viewBill";

function App() {
  return (
    <Router>
       <Navbar /> {/* Navbar is always present */}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/select-client" element={<SelectClient />} />

        <Route path="/select-item" element={<SelectItem />} />
        <Route path="/add-details" element={<AddDetails />} />
        <Route path="/view-bills" element={<ViewBills />} />
      </Routes>
    </Router>
  );
}

export default App;
