import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-200 py-5'>
            <div className='container md:mx-auto md:flex md:justify-between text-center'>
                <div className='md:order-3'>
                    <Link className='mr-3' to='/privacy'> privacy</Link>
                    <Link to='/terms-condition'> terms & condition</Link>
                </div>
                <div className='md:order-2'>
                    <p>Copyright &copy;{new Date().getFullYear()} <strong><Link to={'/'} title="Bayond">Bayond</Link></strong> all right reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;