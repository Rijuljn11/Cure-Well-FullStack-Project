import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar px-4 py-3"
      style={{
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)"
      }}
    >
      <h3 className="text-light fw-bold">🏥 CureWell</h3>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">Doctors</Link>
        <Link className="btn btn-outline-light me-2" to="/specializations">Specializations</Link>
        <Link className="btn btn-outline-light me-2" to="/surgeries">Surgeries</Link>
      </div>
    </nav>
  );
}