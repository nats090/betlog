import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import TechHackathon from './components/TechHackaThon'; // Import TechHackathon component
import WorkshopOnAI from './components/WorkshopOnAI'; // Import WorkshopOnAI component

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/tech-hackathon" component={TechHackathon} />
                <Route path="/events/workshop-ai" component={WorkshopOnAI} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
