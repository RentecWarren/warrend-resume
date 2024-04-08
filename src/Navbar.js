import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1> Warren Davidson </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/create">Leave Message</Link>
      </div>
    </nav>    
   );
}
 
export default Navbar;