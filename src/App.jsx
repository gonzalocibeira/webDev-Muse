import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FireProvider from './contexts/Firecontext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Filterbar from './components/body/filter/Filterbar';
import Admin from './components/body/admin/Admin';

function App() {
  return (
    <>
      <div className="content--container">
        <BrowserRouter>
          <Navbar/>
          <FireProvider>
            <Routes>
              <Route path="/"/>
              <Route path="/admin" element={<Admin/>}/>
            </Routes>
            <Filterbar/>
          </FireProvider>
        </BrowserRouter>
      </div>
      <div className="footer--pin">
        <Footer/>
      </div>
    </>
  );
}

export default App;
