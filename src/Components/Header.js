import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/" className="main-nav-link">
                <h2 className='logo'>MyBlog</h2>
            </Link>
            <div className="main-nav">
                <ul className="main-nav-list">
                    <Link to="/posts" className="main-nav-link">
                        <li className="main-nav-links">Blogs</li>
                    </Link>
                    <Link to="/weather" className="main-nav-link">
                        <li className="main-nav-links">Weather</li>
                    </Link> 
                    <Link to="/todos" className="main-nav-link">
                        <li className="main-nav-links">todos</li>
                    </Link>
                </ul>
            </div>
        </div>  
    )
}