import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
