import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/routes/AdminLogin";
import UserLogin from "./components/routes/UserLogin";
import RegisterComponent from "./components/routes/RegisterComponent";
import UserReport from "../src/report/UserReport";
import Signup from "./components/routes/Signup";
import Homepage from "./components/routes/Homepage";
import AddRegister from "./components/routes/crud/AddRegister";
import ViewRegister from "./components/routes/crud/ViewRegister";
import UpdateRegister from "./components/routes/crud/UpdateRegister";
import DeleteRegister from "./components/routes/crud/DeleteRegister";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<AdminLogin />} />          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/report" element={<UserReport />} />
          <Route path="/register/*" element={<RegisterComponent />} />
          <Route path="/add" element={<AddRegister />} />
          <Route path="view" element={<ViewRegister />} />
            <Route path="update" element={<UpdateRegister />} />
            <Route path="delete" element={<DeleteRegister />} />        
        </Routes>
         </Router>
    </>
  );
}

export default App;
