import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Xavier Institute</h1>
      <p>Select an option below.</p>

      <div className="homeButtons">
        <Link className="btn" to="/courses">Manage Courses</Link>
        <Link className="btn" to="/about">About</Link>
      </div>
    </div>
  );
}