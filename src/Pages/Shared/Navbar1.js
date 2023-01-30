import React from 'react';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (
        <div className="navbar bg-blue-400 px-12">
                    <div className="flex-1">
                        <Link to="/overview" className="btn btn-ghost normal-case text-3xl text-white">beyond</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 items-center">
                        <li>Do you have an account?</li>      
                        <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
    );
}

export default Navbar1;
