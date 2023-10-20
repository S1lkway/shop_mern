import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoutes from './utils/PrivateRoutes'
//-Main components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//-Routes-----------------------------------------------------------------
import Main from './pages/Main'
//-Account
import Basket from './pages/Account/Basket/Basket'
import Favorites from './pages/Account/Favorites/Favorites'
import Location from './pages/Account/Location/Location'
import MainStore from './pages/Account/MainStore/MainStore'
import Tracking from './pages/Account/Tracking/Tracking'
//-Public
import Deals from './pages/Deals/Deals'
import Design from './pages/Design/Design'
import Products from './pages/Products/Products'



function App() {
  return (
    <>
      <Router>

        <Header />
        <Navbar />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Main />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/location' element={<Location />} />
            <Route path='/main_store' element={<MainStore />} />
            <Route path='/tracking' element={<Tracking />} />

            <Route path='/deals' element={<Deals />} />
            <Route path='/design' element={<Design />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>

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
