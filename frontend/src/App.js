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
import Membership from './pages/Account/Membership/Membership'
import PickStore from './pages/Account/PickStore/PickStore'
import PurchaseHistory from './pages/Account/PurchaseHistory/PurchaseHistory';
import ShoppingList from './pages/Account/ShoppingList/ShoppingList';
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

        <div className='container'>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Main />} />
              <Route path='/basket' element={<Basket />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/location' element={<Location />} />
              <Route path='/membership' element={<Membership />} />
              <Route path='/pick_store' element={<PickStore />} />
              <Route path='/purchase_history' element={<PurchaseHistory />} />
              <Route path='/shopping_list' element={<ShoppingList />} />
              <Route path='/tracking' element={<Tracking />} />

              <Route path='/deals' element={<Deals />} />
              <Route path='/design' element={<Design />} />
              <Route path='/products' element={<Products />} />
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
