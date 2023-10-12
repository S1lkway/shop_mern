import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//-Components
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <div className='container'>

          <Header />

          <Footer />

        </div>
      </Router>
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
