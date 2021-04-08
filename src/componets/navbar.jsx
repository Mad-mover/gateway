import { Home } from "@material-ui/icons";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="home">
        <Home />
      </div>
      <span className="logo">GATEWAY</span>
      <span className="more">
        <span className="location">Location</span>
        <span className="contact">Contact Us</span>
        <span className="info">Info</span>
      </span>
    </div>
  );
}
