import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, [])

  return (
    <div className='lg:w-full'>
      {/* <Navbar  className='max-w-7xl mx-auto'> */}
      <Routes>
        {/* Public Route */}
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/products' element={<Products />} />  */}
        {/* <Route path='/blogs' element={<Blogs />} />           */}
        <Route path='/' element={<Login />} />
        {/* <Route path='/myPortfolio' element={<MyPortfolio />} />           */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />

        {/* Private Route */}
        {/* <Route path='/purchase/:id' element={<PrivateRoute><Purchase /></PrivateRoute>} /> */}
        {/*         
          <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>          
            <Route index path='my-profile' element={<MyProfile />}></Route>
            <Route path='my-order' element={<MyOrder />}></Route> 
            <Route path='payment/:id' element = {<Payment />}></Route>         
            <Route path='add-review' element={<AddReview />}></Route>            
            <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
            <Route path='addProduct' element={<AddProduct />}></Route>
            <Route path='makeAdmin' element={<MakeAdmin />}></Route>
            <Route path='manageProducts' element={<ManageProducts />}></Route>
          </Route>         */}
      </Routes>
      {/* <Footer></Footer> */}
      {/* </Navbar> */}
      <ToastContainer />

    </div>
  );
}

export default App;
