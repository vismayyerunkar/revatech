import React from 'react'
import './AdminNavbar.css';
import Logo from './Images/Logo.png';
import { Link } from 'react-router-dom'

function AdminNavbar() {

    return (
        <nav className="admin-navbar">
            <img id="nav-logo-img" src={Logo} height={60} width={60} alt='main-logo' />
            <Link to="/" className="nav-logo"><h1 className="navbar-logo">REVA TECHNOLOGIES</h1></Link>
            <i />
            <div className="admin-nav-items">
                <Link className="admin-nav-item" to="/admin">
                    <span>Blog</span>
                </Link>
                <Link className="admin-nav-item" to="/admin/query">
                    <span>Query</span>
                </Link>
                <Link className="admin-nav-item"to="/admin/testimonial">
                    <span >Testimonials</span>
                </Link>
            </div>
        </nav>
    )
}

export default AdminNavbar
