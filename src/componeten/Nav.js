import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="navbar">
            <ul className="ul">
                <li>
                <Link to="/portfolio-react/home">Home</Link>
                </li>
                <li>
                <Link to="/portfolio-react/project">Project</Link>
                </li>
                <li>
                <Link to="/portfolio-react/about">About</Link>
                </li>
                <li>
                <Link to="/portfolio-react/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;