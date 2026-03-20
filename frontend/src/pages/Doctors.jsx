import { useEffect, useState } from "react";
import axios from "axios";
import {
  getDoctors,
  addDoctor,
  getSpecializations,
  assignSpecialization
} from "../api/api";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const [specs, setSpecs] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState("");

  useEffect(() => {
    fetchDoctors();
    getSpecializations().then(res => setSpecs(res.data));
  }, []);

  const fetchDoctors = () => {
    getDoctors().then(res => setDoctors(res.data));
  };

  const handleAddOrUpdate = () => {
    if (!name) return alert("Enter doctor name");

    if (editId) {
      axios.put(`http://localhost:8080/api/doctors/${editId}`, {
        doctorName: name
      }).then(() => {
        setEditId(null);
        setName("");
        fetchDoctors();
      });
    } else {
      addDoctor({ doctorName: name }).then(() => {
        setName("");
        fetchDoctors();
      });
    }
  };

  const handleEdit = (doc) => {
    setEditId(doc.doctorId);
    setName(doc.doctorName);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this doctor?")) return;

    axios.delete(`http://localhost:8080/api/doctors/${id}`)
      .then(() => fetchDoctors());
  };

  const handleAssign = () => {
    if (!selectedSpec) return alert("Select specialization");

    assignSpecialization({
      doctorId: selectedDoctor,
      specializationCode: selectedSpec,
      specializationDate: new Date().toISOString().slice(0, 10)
    }).then(() => {
      setSelectedDoctor(null);
      setSelectedSpec("");
      alert("Specialization assigned!");
    });
  };

  return (
    <div className="container mt-5">

      {/* ADD / UPDATE */}
      <div className="card p-4 shadow-sm mb-4">
        <h4>{editId ? "Update Doctor" : "Add Doctor"}</h4>

        <div className="input-group">
          <input
            className="form-control"
            placeholder="Enter doctor name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleAddOrUpdate}>
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h4>Doctor List</h4>

          <table className="table table-hover mt-3">
            <thead className="table-dark">
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doc) => (
                <tr key={doc.doctorId}>
                  <td>{doc.doctorId}</td>
                  <td>{doc.doctorName}</td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(doc)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDelete(doc.doctorId)}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => setSelectedDoctor(doc.doctorId)}
                    >
                      Assign Spec
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ASSIGN PANEL */}
      {selectedDoctor && (
        <div className="card p-4 mt-4 shadow-sm border-success">
          <h5>Assign Specialization</h5>

          <select
            className="form-select mb-3"
            value={selectedSpec}
            onChange={(e) => setSelectedSpec(e.target.value)}
          >
            <option value="">Select Specialization</option>

            {specs.map((s) => (
              <option key={s.specializationCode} value={s.specializationCode}>
                {s.specializationName}
              </option>
            ))}
          </select>

          <button className="btn btn-success" onClick={handleAssign}>
            Assign
          </button>
        </div>
      )}

    </div>
  );
}