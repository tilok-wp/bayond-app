import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div className="navbar bg-blue-400 px-12 w-full">
                    <div className="flex-1">
                        <Link to="/overview" className="btn btn-ghost normal-case text-3xl text-white">beyond</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 items-center">    
                        <button className='btn btn-error'>RS</button>
                        </ul>
                    </div>
                </div>
    );
}

export default Navbar2;
