import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import Types from './components/Types';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/types" element={<Types />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;