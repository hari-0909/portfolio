import logo from "../assets/harilogo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/hari-babuji-pasalapudi-47997b257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hari-0909" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/_hari._4" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
