import './App.css'

import Footer from "./components/Footer"
import Header from "./components/Header";
import Home from './Pages/Home';

import {
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About.js';
import Scroll from './components/Scroll';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Hirebtn from './components/Hirebtn';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Contact" element={<Hirebtn/>} />
      </Routes>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
