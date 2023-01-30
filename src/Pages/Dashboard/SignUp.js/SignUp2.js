import React from 'react';
import { FaDiscourse } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar2 from '../../Shared/Navbar2';
const SignUp2 = () => {
    return (
        
        <div className='h-screen bg-slate-100'>
            <Navbar2 />
            <div className='flex items-center justify-center my-8 '>
                <ul className="steps">
                    <li className="step step-primary">Create an account</li>
                    <li className="step step-primary">Company info</li>
                    <li className="step">Choose plan</li>
                    <li className="step">Schedule onboarding</li>
                </ul>
            </div>
            <div className='px-12'>
              <div className="card card-side">
                <div className="text-center lg:text-left px-10">
                    <h1 className="text-5xl">Take your time <br />back. Let’s get <br />Started</h1>                   
                </div>
                  <div className="card-body bg-white rounded-lg px-12 mx-12">
                    <h1 className='text-4xl mb-4'>Company Information</h1>                   
                    <div className="form-control">                      
                      <input type="text" placeholder="Company Name" className="input bg-slate-100 input-bordered" />
                      <input type="text" placeholder="Email Address*" className="input bg-slate-100 input-bordered my-4" />
                      <input type="text" placeholder="Phone Number" className="input bg-slate-100 input-bordered" />
                      <input type="text" placeholder="EIN (xx-xxxxxxxx)" className="input bg-slate-100 input-bordered my-4" />                      
                      <input type="text" placeholder="Company Type*" className="input bg-slate-100 input-bordered" />                      
                      <input type="text" placeholder="What do you sell?" className="input bg-slate-100 input-bordered my-4" />                      
                      <input type="text" placeholder="Year Company Started*" className="input bg-slate-100 input-bordered" />                      
                    </div>
                    <h1 className='text-4xl my-4 mt-8'>Company Information</h1>                   
                    <div className="form-control">                      
                      <input type="text" placeholder="Address Line 1*" className="input bg-slate-100 input-bordered" />
                      <input type="text" placeholder="Address Line 2*" className="input bg-slate-100 input-bordered my-4" />
                      <input type="text" placeholder="City*" className="input bg-slate-100 input-bordered" />
                      <input type="text" placeholder="State*" className="input bg-slate-100 input-bordered my-4" />                      
                      <input type="text" placeholder="Zip Code*" className="input bg-slate-100 input-bordered" />                      
                      <input type="text" placeholder="Country" className="input bg-slate-100 input-bordered my-4" /> 
                      <h1 className='border rounded-lg border-red-500 py-2 text-center text-red-500'>*Please fill in all required fields</h1>                
                    </div>
                    
                    <div className="form-control mt-6">
                      <Link to="/signUp3" className="btn btn-error text-white bold btn-wide">Save & Next</Link>
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

export default SignUp2;
