import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoutes from './utils/PrivateRoutes'
import AdminRoutes from './utils/AdminRoutes'
//-Main components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//-Routes-----------------------------------------------------------------
import Main from './pages/Main'
//-Admin
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Section from './pages/AdminPanel/Section/Section'
//-Account
import Addresses from './pages/Account/Addresses/Addresses'
import Basket from './pages/Account/Basket/Basket'
import Favorites from './pages/Account/Favorites/Favorites'
import Membership from './pages/Account/Membership/Membership'
import OrderHistory from './pages/Account/OrderHistory/OrderHistory'
import Restaraunt from './pages/Account/Restaraunt/Restaraunt'
import Rewards from './pages/Account/Rewards/Rewards'
import Tracking from './pages/Account/Tracking/Tracking'
//-Public
import Menu from './pages/Menu/Menu'
import Deals from './pages/Deals/Deals'



function App() {
  return (
    <>
      <Router>

        <Header />
        <Navbar />

        <div className='container'>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Main />} />

              <Route path='/basket' element={<Basket />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/membership' element={<Membership />} />
              <Route path='/order_history' element={<OrderHistory />} />
              <Route path='/rewards' element={<Rewards />} />
              <Route path='/tracking' element={<Tracking />} />

              <Route path='/addresses' element={<Addresses />} />
              <Route path='/restaraunt' element={<Restaraunt />} />

              <Route path='/menu' element={<Menu />} />
              <Route path='/deals' element={<Deals />} />

              <Route element={<AdminRoutes />}>
                <Route path='/admin_panel' element={<AdminPanel />} />
                <Route path='/section/:id' element={<Section />} />
              </Route>
            </Route>
          </Routes>
        </div>

        <Footer />

      </Router>


      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" /></>
  );
}

export default App;
