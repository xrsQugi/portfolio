import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from "../pages/Home/Home";
import Contacts from 'pages/Contacts/Contacts';
import Projects from 'pages/Projects/Projects';
import ProjectDetails  from 'pages/ProjectDetails/ProjectDetails';

import './styles/App.css'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}
