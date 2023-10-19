import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoutes from './utils/PrivateRoutes'
//-Main components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//-Routes
import Main from './pages/Main'


function App() {
  return (
    <>
      <Router>

        <Header />
        <Navbar />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Main />} />
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
