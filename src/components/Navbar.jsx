import { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "light" : "dark"
    );
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>

     <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>


      <button onClick={toggleTheme}>
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;


