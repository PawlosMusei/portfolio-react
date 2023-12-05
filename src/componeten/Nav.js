import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="navbar">
            <ul className="ul">
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/project">Project</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;