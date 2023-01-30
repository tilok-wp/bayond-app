import React from 'react';

const DashboardNav = () => {
  return (
    <div className='fixed t-0 w-full mr-6 nav-bg'>
      <div class="navbar flex bg-white text-black justify-between">
  <div class="flex-1">
    <div className=''>
      <h1 className='text-xs'>currently viewing</h1>
    <button class="text-2xl">Kadre Inc</button>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-square bg-red-500">RS</button>
  </div>
</div>
<hr className='w-full' />
    </div>
  );
}

export default DashboardNav;
