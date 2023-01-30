import React from 'react';
import { FaDiscourse } from 'react-icons/fa';
import Navbar2 from '../../Shared/Navbar2';
import ssl from '../../../Assets/images/payment/ssl.png';
import stripe from '../../../Assets/images/payment/stripe.png';
import visa from '../../../Assets/images/payment/visa.png';
import mastercard from '../../../Assets/images/payment/mastercard.png';
import amExpress from '../../../Assets/images/payment/am-express.png';
import { Link } from 'react-router-dom';

const SignUp4 = () => {
    return (
        <div className='h-screen bg-slate-100'>
            <Navbar2 />
            <div className='flex items-center justify-center my-8 '>
                <ul className="steps">
                    <li className="step step-primary">Create an account</li>
                    <li className="step step-primary">Company info</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Schedule onboarding</li>
                </ul>
            </div>
            <div className='px-12'>
              <div className="card card-side">
                <div className="text-center lg:text-left px-10">
                    <h1 className="text-5xl">Enter your <br /> billing <br />information.</h1>   
                    <p className='text-xs my-6'>Next step is scheduling your onboarding call.</p>
                    <div className='bg-white rounded-lg p-5'>
                        <h1 className='text-2xl'>Due today:</h1>
                        <div className='flex'>
                            <p className='text-sm mt-1'>$</p>
                            <h1 className='text-4xl'>300</h1>
                        </div>
                        <p className='text-xs my-5'>You will not be billed until after your oboarding call</p>
                        </div>                
                </div>
                  <div className="card-body bg-white rounded-lg px-12 mx-12">
                    <h1 className='text-4xl mb-4'>Billing Information</h1>                   
                    <div className="form-control">                      
                      <input type="text" placeholder="Card Number" className="input bg-slate-100 input-bordered" />
                        <div className='my-4 flex justify-between'>
                            <input type="text" placeholder="Expiration*" className="input bg-slate-100 input-bordered" />
                            <input type="text" placeholder="CVC*" className="input bg-slate-100 input-bordered mx-3" />
                            <input type="text" placeholder="Billing Zip Code*" className="input bg-slate-100 input-bordered" />  
                        </div> 
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" className="checkbox checkbox-accent" />
                                <span className="text-xs ml-2">I agree to the terms of service</span> 
                            </label>
                            </div>                                          
                    </div>                    
                    <div className="mt-6 flex justify-between">
                      <Link to="/signUp3" className="btn bg-white border-1 bold btn-wide">Go back</Link>
                      <button className="btn btn-error text-white bold btn-wide">Save & Next</button>
                    </div>
                    <div className='flex justify-around my-8'>
                        <img className='w-24' src={ssl} alt="" />
                        <img className='w-24' src={stripe} alt="" />
                        <img className='w-24' src={visa} alt="" />
                        <img className='w-24' src={mastercard} alt="" />
                        <img className='w-24' src={amExpress} alt="" />
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

export default SignUp4;
