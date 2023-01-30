import React from 'react';
import DashboardNav from '../Shared/DashboardNav';
import gusto from '../../Assets/images/apps/gusto-logo.svg';
import newity from '../../Assets/images/apps/newity-logo.svg';

const AppsOffers = () => {
    return (
        <div>
            <div className='container'>
            <h1 className='text-5xl my-10'>Apps & Offers</h1>
            </div>
            <div className='flex gap-12'>
            <div className="card w-96 h-96 border-2 shadow-xl rounded">
  <figure className="px-10 pt-10">
    <img src={gusto} alt="Shoes" className="rounded w-40" />
  </figure>
  <div className="card-body items-center text-center">    
    <p className='text-2xl'>Payroll Platform</p>
    <div className="card-actions">
      <button className="btn btn-wide btn-outline bg-red-500">Connect</button>
    </div>
  </div>
</div>
<div className="card w-96 border-2 shadow-xl rounded">
  <figure className="px-10 pt-10">
    <img src={newity} alt="Shoes" className="rounded w-40" />
  </figure>
  <div className="card-body items-center text-center">    
    <p className='text-2xl'>Business Lending</p>
    <p>SBA 7(a) loan opportunities</p>
    <div className="card-actions">
      <button className="btn btn-wide btn-outline btn-accent">Learn More</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}

export default AppsOffers;
