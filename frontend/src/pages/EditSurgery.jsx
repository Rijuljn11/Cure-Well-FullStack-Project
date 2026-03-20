import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditSurgery() {
  const location = useLocation();
  const navigate = useNavigate();

  const [surgery, setSurgery] = useState(location.state);

  const handleChange = (e) => {
    setSurgery({ ...surgery, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    if (!surgery.startTime || !surgery.endTime) {
      alert("Time required");
      return;
    }

    if (parseFloat(surgery.startTime) >= parseFloat(surgery.endTime)) {
      alert("Start must be less than End");
      return;
    }

    axios.put("http://localhost:8080/api/surgeries", surgery)
      .then(() => {
        alert("Updated!");
        navigate("/surgeries");
      });
  };

  return (
    <div className="container mt-5">
      <h3>Update Surgery</h3>

      <input className="form-control mb-2" value={surgery.surgeryId} disabled />
      <input className="form-control mb-2" value={surgery.doctorId} disabled />
      <input className="form-control mb-2" value={surgery.surgeryDate} disabled />

      <input
        className="form-control mb-2"
        name="startTime"
        value={surgery.startTime}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="endTime"
        value={surgery.endTime}
        onChange={handleChange}
      />

      <button className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}