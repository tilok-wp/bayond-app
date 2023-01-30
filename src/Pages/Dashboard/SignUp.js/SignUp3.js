import React from "react";
import Navbar2 from "../../Shared/Navbar2";
import logo from "../../../Assets/images/logo/logo.png";
import { FaDiscourse } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp3 = () => {
  return (
    <div className="h-screen bg-slate-100 relative">
      <Navbar2 />
      <div className="flex items-center justify-center my-8 ">
        <ul className="steps">
          <li className="step step-primary">Create an account</li>
          <li className="step step-primary">Company info</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Schedule onboarding</li>
        </ul>
      </div>
      <div className="px-12 mt-12">
        <div className="card card-side">
          <div className="text-center lg:text-left px-10 w-2/6 mr-12">
            <h1 className="text-5xl">
              Choose your <br />
              plan
            </h1>
            <div className="flex gap-3 mt-5">
              <h1>Monthly</h1>
              <input type="checkbox" className="toggle toggle-success" />
              <h1>Anually</h1>
            </div>
            <p className="my-5">
              During your onboarding call we will ensure it’s <br />
              the right fit for youa
            </p>
            <h1 className="text-2xl">Due today: 0.00</h1>
          </div>
          <div className=" w-4/6">
            <div className="flex gap-3">
              <div className="card bg-white shadow-xl px-10 pt-10">
                <div className=" items-center">
                  <h1 className="text-xl uppercase text-center">Essential</h1>
                  <h1 className="text-2xl text-center">$395</h1>
                  <p className="text-sm text-center">/m</p>
                  <p className="text-xs py-4 text-center">
                    Bookkeeping for up to <br />
                    $50k in monthly expenses
                  </p>
                  <h1 className="text-sm mb-4 uppercase text-center">ESSENTIAL includes</h1>
                  <ul className="text-xs package-list align-baseline">
                      <li>Weekly bookkeeping</li>
                      <li>Up to 4 bank/credit card accounts</li>
                      <li>Dedicated bookkeeping team</li>
                      <li>Cash basis</li>
                      <li>1 integration</li>                    
                  </ul>
                  <div className="text-center">
                    <Link to="/signUp4" className="btn btn-primary mx-auto px-10 my-6">Select</Link>
                  </div>
                </div>
              </div>
              <div className="indicator">
                <span className="indicator-item indicator-top indicator-center badge badge-secondary">
                  Most Popular!
                </span>
                <div className="card bg-white shadow-xl px-10 pt-10">
                  <div className=" items-center">
                    <h1 className="text-xl uppercase text-center">GROWTH</h1>
                    <h1 className="text-2xl text-center">
                      $695
                    </h1>
                    <p className="text-sm text-center">/m</p>
                    <p className="text-xs py-4 text-center">
                      Bookkeeping for up to <br />
                      $750k in monthly expenses
                    </p>
                    <h1 className="text-sm mb-4 uppercase text-center">Everything in Essential,plus: </h1>
                    <ul className="text-xs text-start">
                      <li>Up to 4 bank/credit card accounts</li>
                      <li>Cash or modified accrual</li>
                      <li>Semi-annual tax consult</li>
                      <li>2 integrations</li>
                    </ul>
                    <div className="text-center">
                    <Link to="/signUp4" className="btn btn-primary mx-auto px-10 my-6">Select</Link>
                  </div>
                  </div>
                </div>
              </div>

              <div className="card bg-white shadow-xl px-10 pt-10">
                <div className=" items-center">
                  <h1 className="text-xl uppercase text-center">SCALE</h1>
                  <h1 className="text-2xl text-center">
                    $995
                  </h1>
                  <p className="text-sm text-center">/m</p>
                  <p className="text-xs py-4 text-center">
                    Bookkeeping for up to <br />
                    $750k in monthly expenses
                  </p>
                  <h1 className="text-sm mb-4 uppercase text-center">Everything in Growth,plus:</h1>
                  <ul className="text-xs">
                    <li>Up to 12 bank/credit card accounts</li>
                    <li>Custom Chart of Accounts</li>
                    <li>Deferred schedules</li>
                    <li>Up to 4 integrations</li>
                  </ul>
                  <div className="text-center">
                    <Link to="/signUP4" className="btn btn-primary mx-auto px-10 my-6">Select</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 bg-white px-12 py-2 mt-4 rounded-xl">
              <img
                className="bg-slate-400 w-12 h-12 rounded-full p-2 info-image"
                src={logo}
                alt=""
              />
              <div>
                <h1 className="text-xl mb-3">Looking for additional service?</h1>
                <p className="text-sm mb-8">
                  Annual tax returns,fractional CFO,catch-up bookeeping, or
                  custom plans,we have you covered.Talk to your onboarding
                  specialist for details
                </p>
                <p>
                  *85% of our customers choose Beyond to file their annual teax
                  returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};
export default SignUp3;
