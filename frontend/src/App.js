import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Doctors from "./pages/Doctors";
import Specializations from "./pages/Specializations";
import Surgeries from "./pages/Surgeries";
import EditSurgery from "./pages/EditSurgery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container-fluid px-4 py-3">
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="/specializations" element={<Specializations />} />
          <Route path="/surgeries" element={<Surgeries />} />
          <Route path="/edit-surgery" element={<EditSurgery />} />
        </Routes>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;