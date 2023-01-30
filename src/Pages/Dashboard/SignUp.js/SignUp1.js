import React from 'react';
import { FaDiscourse } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/images/logo/logo.png"
import Navbar1 from '../../Shared/Navbar1';
import SignUp2 from './SignUp2';
const SignUp1 = () => {
    return (
        <div className='h-screen bg-slate-100'>            
            <Navbar1 />
            <div className='flex items-center justify-center my-8 '>
                <ul className="steps">
                    <li className="step step-primary">Create an account</li>
                    <li className="step">Company info</li>
                    <li className="step">Choose plan</li>
                    <li className="step">Schedule onboarding</li>
                </ul>
            </div>           
            
            <div className='px-12'>
              <div className="card card-side">
                <div className="text-center lg:text-left px-10">
                    <h1 className="text-5xl">Take your time <br />back. Let’s get <br />Started</h1>
                    <p className="py-6 mx-8 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa explicabo tempore odit provident illum. Earum quia molestias cupiditate provident et culpa, id porro! Molestias tempore eligendi sunt id repellendus corporis fugiat inventore dolore qui, veniam accusamus ad. Cum enim magni tenetur reiciendis modi dicta velit dignissimos at cumque ratione.</p>
                    <div className='flex gap-5 px-10'>
                      <img className='w-12 rounded-full p-2' src={logo} alt="" />
                      <div>
                        <h1>Mike Z</h1>
                        <p>Owner,Digital Marketing</p>
                      </div>
                    </div>
                </div>
                  <div className="card-body bg-white rounded-lg px-12">
                    <div className="flex gap-5 mb-2">
                       <input type="text" placeholder="First Name" className="input bg-slate-100 w-full max-w-xs" />
                       <input type="text" placeholder="Last Name" className="input bg-slate-100 w-full max-w-xs" />
                    </div>
                    <div className="form-control">                      
                      <input type="text" placeholder="Enter Email" className="input bg-slate-100 input-bordered" />
                      <input type="text" placeholder="Phone Number" className="input bg-slate-100 input-bordered my-4" />
                      <input type="text" placeholder="Password" className="input bg-slate-100 input-bordered" />                      
                    </div>
                    <div className='flex gap-5 bg-slate-100 w-fit p-3 mt-2 rounded'>
                    <input type="checkbox" className="checkbox" />
                    <p>I’m not a robot</p>
                    </div>
                    <div className="form-control mt-6">
                      <Link to="/signUp2" className="btn btn-outline btn-info btn-wide">Create Account</Link>
                    </div>
                  </div>
              </div>
            </div>
            <div className='flex justify-end bottom-0 right-0 mb-7 mr-7 absolute message-icon'>
                <button><FaDiscourse /></button>
            </div>
        </div>
    );
}

export default SignUp1;
