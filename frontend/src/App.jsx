import React from "react";
// // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useSelector } from "react-redux";
import HeroSection2 from "./components/HeroSection2";
import TrustedBySection from "./components/TrustedBySection";
import RefineStyleComponent from "./components/RefineStyleComponent";
import SweetSpotInteractiveSection from "./components/RefineStyleComponent";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  // const [isDark,setIsDark] = useState(false);

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // }
  return (
    <div className={isDark ? "dark bg-gray-900" : ""}>
      {/* <div className={isDark ? "dark" : ""}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1 className="text-5xl bg-primary dark:bg-primary-dark dark:text-white ">Hello world!</h1>

    </div> */}
      <Navbar />
      <HeroSection />
      <HeroSection2/>
      <TrustedBySection/>
      {/* <RefineStyleComponent/> */}
      <SweetSpotInteractiveSection/>
      
    </div>
  );
}

export default App;
