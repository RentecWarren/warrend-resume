import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1> Warren Davidson </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>    
   );
}
 
export default Navbar;