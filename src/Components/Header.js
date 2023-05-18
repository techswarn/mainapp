import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/" className="main-nav-link">
                <h2 className='logo'>FishCart</h2>
            </Link>
            <div className="main-nav">
                <ul className="main-nav-list">
                    <Link to="/posts" className="main-nav-link">
                        <li className="main-nav-links">Fish</li>
                    </Link>
                    <Link to="/Users" className="main-nav-link">
                        <li className="main-nav-links">Users</li>
                    </Link> 
                    <Link to="/todos" className="main-nav-link">
                        <li className="main-nav-links">About Us</li>
                    </Link>
                </ul>
            </div>
        </div>  
    )
}