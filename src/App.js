import Navigation from "./Components/Navigation/Navigation";
import AppRouter from "./AppRouter";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import * as FaIcons from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'light-mode' : 'dark-mode'}>
      <div className="container-mode">
        <span id="span-mode" style={{ color: darkMode ? 'black' : '#c96dfd' }}><FaIcons.FaMoon /></span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span id="span-mode" className="slider round"></span>
          </label>
        </div>
        <span id="span-mode" style={{ color: darkMode ? 'yellow' : 'white' }}><FaIcons.FaSun /></span>
      </div>
      <Navigation />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
