import React from 'react';
import "./Overview.css"

const Overview = () => {
    return (
        <div className='container'>
            <div className='mt-6 px-6 py-8 bg-image text-white'>
                <h1 className='py-5'>Your onboarding is scheduled!</h1>
            </div>
            <div className='grid grid-cols-2 divide-x divide-black-500 py-10 text-black'>
                <div className='pr-16 leading-10'>
                    <h1 className='text-2xl mb-10'>What You Will Need for Your <br /> Onboarding</h1>
                    <div className='leading-10'>
                    <p>A Computer <span className='text-xs ml-6 text-slate-400'>(with internet access)</span></p>
                    <hr className='my-3' />
                    <p>Bank & Credit Card Login <br /> Information <span className='text-xs ml-6 text-slate-400'>(for view-only access)</span></p>
                    <hr className='my-3' />
                    <p>30 - 45 minutes <span className='text-xs ml-6 text-slate-400'>(give or take)</span></p>
                    </div>
                    <h1 className='text-2xl mt-10'>... and the desire to offload <br />bookkeeping!</h1>
                </div>                
                <div className='pl-16'>
                    <h1 className='text-2xl mb-8'>Welcome Video</h1>                    
                    <iframe className='w-full h-80' src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>

                </div>
            </div>
                    <hr />
                    <div>
                        <h1 className='text-2xl my-10'>Testimonials</h1>
                        <div>
                        <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='flex flex-col border-2 rounded-sm'>
  <div className='px-10 py-12'>
  <h1 className='text-3xl mb-6'>"I Feel Found"</h1>
    <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi autem nihil quam ea neque blanditiis error, dolor quos quidem quae itaque qui voluptates tempore!</p>
    <p className='mt-4'>Lorem, ipsum dolor.</p>
  </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='flex flex-col border-2 rounded-sm'>
  <div className='px-10 py-12'>
  <h1 className='text-3xl mb-6'>"I Feel Found"</h1>
    <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi autem nihil quam ea neque blanditiis error, dolor quos quidem quae itaque qui voluptates tempore!</p>
    <p>Lorem, ipsum dolor.</p>
  </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='flex flex-col border-2 rounded-sm'>
  <div className='px-10 py-12'>
  <h1 className='text-3xl mb-6'>"I Feel Found"</h1>
    <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi autem nihil quam ea neque blanditiis error, dolor quos quidem quae itaque qui voluptates tempore!</p>
    <p>Lorem, ipsum dolor.</p>
  </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='flex flex-col border-2 rounded-sm'>
  <div className='px-10 py-12'>
  <h1 className='text-3xl mb-6'>"I Feel Found"</h1>
    <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi autem nihil quam ea neque blanditiis error, dolor quos quidem quae itaque qui voluptates tempore!</p>
    <p>Lorem, ipsum dolor.</p>
  </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
                        </div>
                    </div>
        </div>
    );
}

export default Overview;
