import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Admin from './components/body/admin/Admin';

function App() {
  return (
    <>
      <div className="content--container">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/"/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer--pin">
        <Footer/>
      </div>
    </>
  );
}

export default App;
