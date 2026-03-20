import { useEffect, useState } from "react";
import {
  getSpecializations,
  getDoctorsBySpecialization,
} from "../api/api";

export default function Specializations() {
  const [specs, setSpecs] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState("");

  useEffect(() => {
    getSpecializations().then((res) => setSpecs(res.data));
  }, []);

  const handleViewDoctors = (code) => {
    setSelectedSpec(code);

    getDoctorsBySpecialization(code).then((res) =>
      setDoctors(res.data)
    );
  };

  return (
    <div className="container mt-5">

      <h2 className="text-white">⚕️ Specializations</h2>

      
      <div className="card p-3 shadow-lg">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {specs.map((s) => (
              <tr key={s.specializationCode}>
                <td><strong>{s.specializationCode}</strong></td>

                <td>
                  <span className="badge bg-info">
                    {s.specializationName}
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleViewDoctors(s.specializationCode)}
                  >
                    View Doctors
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {doctors.length > 0 && (
        <div className="card p-3 mt-4 shadow-lg">
          <h4 className="mb-3">
            👨‍⚕️ Doctors for {selectedSpec}
          </h4>

          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Specialization Date</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((d, index) => (
                <tr key={index}>
                  <td>{d.doctorId}</td>
                  <td>{d.doctorName}</td>
                  <td>
                    
                    {d.specializationDate
                      ? new Date(d.specializationDate).toLocaleDateString()
                      : new Date().toLocaleDateString()}

                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}