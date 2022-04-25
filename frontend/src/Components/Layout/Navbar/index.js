import { Link } from 'react-router-dom';

import { NavbarHeader, NavbarNav,
    NavBarContainerLogo, NavBarContainerLinks } from './style';

function Navbar(){
    return(
        <NavbarHeader bgColor = {`#58ad17`}>
            <NavbarNav navTextColor = {`#fff`}>
                <NavBarContainerLogo>
                    <Link to="/">
                        <h2>
                            Fidelizou<span>.Me</span>
                        </h2>
                    </Link>
                </NavBarContainerLogo>
                <NavBarContainerLinks>
                    <ul>
                        <li>
                            <Link to="/">
                                Filter Input
                            </Link>
                        </li>
                        <li>
                            <Link to="/filters">
                                Filter Checkbox
                            </Link>
                        </li>
                    </ul>
                </NavBarContainerLinks>
            </NavbarNav>
        </NavbarHeader>
    );
}

export default Navbar;