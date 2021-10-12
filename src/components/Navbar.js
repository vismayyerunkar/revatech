import React, { Component, useState } from 'react';
import { Button } from './Button';
import './Navbar.css';
import Logo from '../components/Images/Logo.png';
import { Link } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
import Dropdown from 'react-multilevel-dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return (
        <nav className="NavbarItems">
            <div className="menu-icon" onClick={handleClick}>
                <i onClick={(e) => setClick(!click)} className='fas fa-bars'></i>
            </div>
            <img id="nav-logo-img" src={Logo} height={60} width={60} alt='main-logo' />
            <Link to="/" className="nav-logo"><h1 className="navbar-logo">REVA TECHNOLOGIES</h1></Link>
            <i />
            <div id="sidebar-open" className={click ? "sidebar-wrapper" : null}>
                <div className={click ? "sidebar-menu" : null}>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <i onClick={(e) => setClick(!click)} className={'fas fa-times'}></i> : null}
                    </div>
                    <div className="mobile-nav-items">
                        {click ?
                            (
                                <ul>
                                    <ScrollIntoView onClick={(e) => closeMobileMenu()} selector="#home">
                                        <Link className="Dropdown_button__3YDRf Dropdown_button__1eOcd nav-links" onClick={closeMobileMenu} to="/"><li>Home</li></Link>
                                    </ScrollIntoView>

                                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                                </Link>*/}
                                        <Dropdown position="right" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                                            title='Services'
                                        >
                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                AI / ML
                                            </Dropdown.Item>

                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                Data Annotation
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                Predictive Analytics
                                            </Dropdown.Item>

                                            <Dropdown.Item>
                                                Web Development
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Mobile App Development
                                                <Dropdown.Submenu>
                                                    <Dropdown.Item>
                                                        Ios App development
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        Android App development
                                                    </Dropdown.Item>
                                                </Dropdown.Submenu>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Corporate Training
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Digital Marketing
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Content Writing
                                            </Dropdown.Item>

                                        </Dropdown>
                                    </li>

                                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                                </Link>*/}
                                        <Dropdown position="right" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                                            title='Solutions'
                                        >
                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                Healthcare Industry
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                ML/AI
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                Web And Mobile App Development
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Bespoke software Products
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                E-learing
                                            </Dropdown.Item>

                                            <Dropdown.Item
                                                onClick={closeMobileMenu}
                                            >
                                                Digital marketing / Content Writing
                                            </Dropdown.Item>


                                        </Dropdown>
                                    </li>
                                    {/*<Link className="nav-links" onClick={closeMobileMenu}to='/career'><li>Career</li></Link>
                        <Link className="nav-links" onClick={closeMobileMenu}to='/clients'><li>Clients</li></Link>*/}
                                    <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={closeMobileMenu} to='/career'><li>Career</li></Link>
                                    <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={closeMobileMenu} to='/clients'><li>Clients</li></Link>

                                    <ScrollIntoView onClick={(e) => closeMobileMenu()} selector="#aboutPage">
                                        <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" to="/"><li>About Us</li></Link>
                                    </ScrollIntoView>

                                    <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={(e) => closeMobileMenu()} to='/blog'><li>Blog</li></Link>

                                    <Link to="/contact-us" onClick={(e) => closeMobileMenu()} className='Dropdown_button__3YDRf Dropdown_button__1eOcd sidebar-contact-us-btn'>Contact Us</Link>

                                </ul>
                            )
                            : null}

                    </div>
                </div>

            </div>


            {/* Nav options */}
            <ul className='nav-menu'>

                <ScrollIntoView selector="#home">
                    <Link className="Dropdown_button__3YDRf Dropdown_button__1eOcd nav-links" onClick={closeMobileMenu} to="/"><li>Home</li></Link>
                </ScrollIntoView>


                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown position="right" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Services'
                    >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            AI / ML
                        </Dropdown.Item>

                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Data Annotation
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Predictive Analytics
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Web Development
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Mobile App Development
                            <Dropdown.Submenu>
                                <Dropdown.Item>
                                    Ios App development
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Android App development
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Corporate Training
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Digital Marketing
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Content Writing
                        </Dropdown.Item>

                    </Dropdown>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Solutions'
                    >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Healthcare Industry
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            ML/AI
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Web And Mobile App Development
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Bespoke software Products
                        </Dropdown.Item>
                        <Dropdown.Item>
                            E-learing
                        </Dropdown.Item>

                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Digital marketing / Content Writing
                        </Dropdown.Item>


                    </Dropdown>
                </li>
                {/*<Link className="nav-links" onClick={closeMobileMenu}to='/career'><li>Career</li></Link>
                <Link className="nav-links" onClick={closeMobileMenu}to='/clients'><li>Clients</li></Link>*/}

                <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={closeMobileMenu} to='/career'><li>Career</li></Link>
                <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={closeMobileMenu} to='/clients'><li>Clients</li></Link>
                <ScrollIntoView selector="#aboutPage">
                    <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" to="/"><li>About Us</li></Link>
                </ScrollIntoView>


                <Link className="Dropdown_button__3YDRf nav-links Dropdown_button__1eOcd" onClick={closeMobileMenu} to='/blog'><li>Blog</li></Link>

            </ul>
            <Link to="/contact-us" className='navbar-button'><Button>Contact Us</Button></Link>


        </nav>
    )
}

export default Navbar;
// document.getElementById('card-content').scrollIntoView()
