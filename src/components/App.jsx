import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";

import './styles/App.css'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}
