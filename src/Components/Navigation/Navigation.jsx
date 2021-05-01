import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navigation.css'

const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="navigation">

            <div className="navbar">
                <Link to="/" className="navbar-head">Car Insurance</Link>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} id="burger-menu" />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose id="burger-menu" />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;