import { useEffect, useState } from "react";
import axios from "axios";
import { getTodaySurgeries } from "../api/api";
import { toast } from "react-toastify";

export default function Surgeries() {
  const [editData, setEditData] = useState(null);
  const [surgeries, setSurgeries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    doctorId: "",
    surgeryDate: "",
    startTime: "",
    endTime: "",
    surgeryCategory: ""
  });

  const fetchData = () => {
    getTodaySurgeries()
      .then(res => setSurgeries(res.data))
      .catch(() => toast.error("Failed to load surgeries ❌"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ ADD
  const handleAdd = () => {
    if (!form.doctorId || !form.surgeryDate || !form.startTime || !form.endTime || !form.surgeryCategory) {
      toast.warning("All fields are required ⚠️");
      return;
    }

    if (parseFloat(form.startTime) >= parseFloat(form.endTime)) {
      toast.error("Start time must be less than End time ❌");
      return;
    }

    axios.post("http://localhost:8080/api/surgeries", form)
      .then(() => {
        toast.success("Surgery Added ✅");
        fetchData();
        setShowModal(false);

        setForm({
          doctorId: "",
          surgeryDate: "",
          startTime: "",
          endTime: "",
          surgeryCategory: ""
        });
      })
      .catch(() => toast.error("Failed to add surgery ❌"));
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    if (!window.confirm("Delete this surgery?")) return;

    axios.delete(`http://localhost:8080/api/surgeries/${id}`)
      .then(() => {
        toast.success("Deleted Successfully 🗑️");
        fetchData();
      })
      .catch(() => toast.error("Delete failed ❌"));
  };

  // ✅ UPDATE
  const handleUpdate = () => {
    if (!editData.startTime || !editData.endTime || !editData.surgeryCategory) {
      toast.warning("All fields required ⚠️");
      return;
    }

    axios.put(
      `http://localhost:8080/api/surgeries/${editData.surgeryId}`,
      editData
    ).then(() => {
      toast.success("Updated Successfully ✅");
      setEditData(null);
      fetchData();
    }).catch(() => toast.error("Update failed ❌"));
  };

  return (
    <div className="container mt-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">🩺 Surgery Dashboard</h2>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          ➕ Add Surgery
        </button>
      </div>

      {/* DASHBOARD */}
      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card p-3 text-center shadow">
            <h6>Total Surgeries</h6>
            <h2>{surgeries.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center shadow">
            <h6>Today</h6>
            <h2>{new Date().toLocaleDateString()}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center shadow">
            <h6>Active Doctors</h6>
            <h2>{new Set(surgeries.map(s => s.doctorId)).size}</h2>
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="card shadow-lg p-3">
        <h4 className="mb-3">📋 Surgeries</h4>

        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {surgeries.map(s => (
              <tr key={s.surgeryId}>
                <td>{s.surgeryId}</td>
                <td>{s.doctorId}</td>
                <td>{s.surgeryDate}</td>
                <td>{s.startTime} - {s.endTime}</td>
                <td>
                  <span className="badge bg-info">
                    {s.surgeryCategory}
                  </span>
                </td>
                <td>
                  {/* ✅ EDIT BUTTON */}
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditData(s)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(s.surgeryId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      {showModal && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content p-4">

              <h4>Add Surgery</h4>

              <input className="form-control mb-2" name="doctorId" placeholder="Doctor ID" value={form.doctorId} onChange={handleChange} />
              <input type="date" className="form-control mb-2" name="surgeryDate" value={form.surgeryDate} onChange={handleChange} />
              <input className="form-control mb-2" name="startTime" placeholder="Start Time" value={form.startTime} onChange={handleChange} />
              <input className="form-control mb-2" name="endTime" placeholder="End Time" value={form.endTime} onChange={handleChange} />
              <input className="form-control mb-3" name="surgeryCategory" placeholder="Category" value={form.surgeryCategory} onChange={handleChange} />

              <button className="btn btn-success w-100 mb-2" onClick={handleAdd}>
                Save
              </button>

              <button className="btn btn-secondary w-100" onClick={() => setShowModal(false)}>
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

      {/* 🔥 EDIT MODAL */}
      {editData && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content p-4">

              <h4>Edit Surgery</h4>

              <input className="form-control mb-2"
                value={editData.startTime}
                onChange={(e) => setEditData({ ...editData, startTime: e.target.value })}
              />

              <input className="form-control mb-2"
                value={editData.endTime}
                onChange={(e) => setEditData({ ...editData, endTime: e.target.value })}
              />

              <input className="form-control mb-3"
                value={editData.surgeryCategory}
                onChange={(e) => setEditData({ ...editData, surgeryCategory: e.target.value })}
              />

              <button className="btn btn-success w-100 mb-2" onClick={handleUpdate}>
                Update
              </button>

              <button className="btn btn-secondary w-100" onClick={() => setEditData(null)}>
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}