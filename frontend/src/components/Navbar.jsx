import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const active=(p)=> loc.pathname===p ? {color:"var(--purple)",fontWeight:600} : {color:"gray"};

  return (
    <nav style={{padding:"20px", borderBottom:"1px solid #eee", display:"flex", gap:"20px", justifyContent:"center"}}>
      <Link to="/" style={active("/")}>Home</Link>
      <Link to="/projects" style={active("/projects")}>Projects</Link>
      <Link to="/about" style={active("/about")}>About</Link>
      <Link to="/resume" style={active("/resume")}>Resume</Link>
      <Link to="/contact" style={active("/contact")}>Contact</Link>
    </nav>
  );
}
