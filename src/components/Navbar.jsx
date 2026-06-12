import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FitZone Gym</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
  <Link to="/bmi">BMI</Link>
</li>

        <li>
          <Link to="/programs">Programs</Link>
        </li>

        <li>
          <Link to="/plans">Plans</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;