import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotfoundPage from './components/NotfoundPage/NotfoundPage';
import Privacy from './components/Privacy/Privacy';
import TermsCondition from './components/TermsCondition/TermsCondition';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/privacy' element={<Privacy></Privacy>}></Route>
        <Route path='/terms-condition' element={<TermsCondition></TermsCondition>}></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
