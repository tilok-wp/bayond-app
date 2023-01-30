import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Overview from './Pages/Overview/Overview';
import Report from './Pages/Reports/Reports';
import Tax from './Pages/Tax/Tax';
import Documents from './Pages/Documents/Documents';
import Contacts from './Pages/Contacts/Contacts';
import AppsOffers from './Pages/Apps&Offers/Apps&Offers';
import SignUp3 from './Pages/Dashboard/SignUp.js/SignUp3';
import SignUp4 from './Pages/Dashboard/SignUp.js/SignUp4';
import SignUp1 from './Pages/Dashboard/SignUp.js/SignUp1';
import SignUp2 from './Pages/Dashboard/SignUp.js/SignUp2';
// import Menu from './Pages/menu/Menu';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, [])

  return (
    <div className='lg:w-full'>      
        <Routes>
        <Route path='/login' element={<Login />} />
        
        {/* <Route path='/myPortfolio' element={<MyPortfolio />} />           */}
        <Route path='/signup' element={<SignUp1 />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/signup3' element={<SignUp3 />} />
        <Route path='/signup4' element={<SignUp4 />} />
        </Routes>
      <Dashboard>
      {/* <DashboardNav  className='max-w-7xl mx-auto'> */}
      <Routes>
        {/* Public Route */}
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/products' element={<Products />} />  */}
        {/* <Route path='/blogs' element={<Blogs />} />           */}
        {/* <Route path='/' element={<Dashboard />}></Route> */}
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Overview />}></Route>
        <Route path='/overview' element={<Overview />}></Route>
        <Route path='/report' element={<Report />}></Route>
        <Route path='/tax' element={<Tax />}></Route>
        <Route path='/documents' element={<Documents />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/apps&offers' element={<AppsOffers />}></Route>

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
      </Dashboard>
      {/* <Footer></Footer> */}
      {/* </DashboardNav> */}
      <ToastContainer />

    </div>
  );
}

export default App;
