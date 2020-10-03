import React, { useEffect } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";
import { Link, useHistory } from "react-router-dom";

import "../css/header.css";
import logo from "../images/logo.png";

const Header = (props) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        history.push("/home");
    }, [history]);
    return (
        <div>
            <MDBNavbar
                color="white"
                light
                expand="md"
                className="text-dark shadow-sm"
            >
                <MDBNavbarBrand>
                    <img
                        src={logo}
                        className="rounded float-left ml-5"
                        alt="Logo"
                        width="100px"
                    />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right className="font-weight-bold">
                        <MDBNavItem className="px-5 ">
                            <MDBNavLink to="/home">Home</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem className="px-5">
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span>Sectors</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="special-color-dark">
                                    <MDBDropdownItem className="dropdown-item">
                                        <Link
                                            className="text-white"
                                            to="/sectors/animal-feed"
                                        >
                                            Animal Feed
                                        </Link>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <Link
                                            className="text-white"
                                            to="/sectors/wood-biomass"
                                        >
                                            Wood & Biomass
                                        </Link>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <Link
                                            className="text-white"
                                            to="/sectors/fertilizers"
                                        >
                                            Fertilizers
                                        </Link>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <Link
                                            className="text-white"
                                            to="/sectors/recycling"
                                        >
                                            Recycling
                                        </Link>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <Link
                                            className="text-white"
                                            to="/sectors/dies-rolls"
                                        >
                                            Dies & Rolls
                                        </Link>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem className="px-5">
                            <MDBNavLink to="/contact-us">Contact Us</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className="px-5 mr-4">
                            <MDBNavLink to="/about-us">About Us</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
};

export default Header;
