import Logo from "../assets/mylogo.png";
import { socialLinks } from "../constants/socialLinks";
import Sound from "./Sound";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="rounded-full p-2">
          <img className="mx-2 w-20 hover:scale-110" src={Logo} alt="logo" />
        </a>
      </div>
      <Sound/>
      <div className="icon m-8 flex items-center gap-3 text-3xl">
        
        {socialLinks.map(({ href, icon: Icon, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-cyan-300 transition-colors hover:scale-110"
          >
            <Icon /> 
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
