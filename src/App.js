import React, { useEffect } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

// Sections
import Home from './routes/Home';
import About from './routes/About';
import Fullabout from './routes/Fullabout';
import Work from './routes/Work';
import Blog from './routes/Blog';
import Orderblog from './routes/Orderblog';
import Testimonial from './routes/Testimonial';
import Contact from './routes/Contact';

import Hero from './Components/Hero'; 
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import workBg from "./Assets/home-banner-image.png";

function Layout({ children, title, subtitle, background }) {
  return (
    <>
      <Hero title={title} subtitle={subtitle} backgroundImage={background} />
      {children}
    </>
  );
}

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Work />
              <Blog />
              <Testimonial />
              <Contact />
            </>
          }
        />

        <Route
          path="/fullabout"
          element={
            <Layout
              title="About Us"
              subtitle="Home / About"
              background={workBg}
            >
              <Fullabout />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout
              title="Work"
              subtitle="Home / Work"
              background={workBg}
            >
              <Work />
            </Layout>
          }
        />
        <Route
  path="/orderblog"
  element={
    <Layout
      title="Our Menu"
      subtitle="Home / Menu"
      background={workBg}
    >
      < Orderblog/>   
    </Layout>
  }
/>
        <Route
          path="/testimonial"
          element={
            <Layout
              title="Testimonial"
              subtitle="Home / Testimonial"
              background={workBg}
            >
              <Testimonial />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout
              title="Contact Us"
              subtitle="Home / Contact"
              background={workBg}
            >
              <Contact />
            </Layout>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
