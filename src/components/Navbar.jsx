import Logo from "../assets/mylogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="rounded-full p-2">
          <img className="mx-2 w-20 hover:scale-110 " src={Logo} alt="logo" />
        </a>
      </div>

      <div className="icon m-8 flex items-center gap-3 text-3xl">
        <a
          href="https://www.linkedin.com/in/ath-polin-479bb52b0/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition-colors hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/share/1Ej4JaHGJf/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition-colors hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/http_pinnnnn.lo/profilecard/?igsh=MXhvYjc0bHEzcWtkag=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition-colors hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Polin-weblearning"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition-colors hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
