import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/home/index';
import AboutUs from './pages/aboutUs';
import Properties from './pages/properties';
import ContactUs from './pages/conatactUs';
import './App.css';
import Navbar from './component/navBar';

function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/properties" element={<Properties />} /> 
        <Route path="/Contact" element={<ContactUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;
