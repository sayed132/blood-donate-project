import { Link } from "react-router-dom";
import logo from "../../../assets/logo/Logo.png"

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/campaign"}>Campaign</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/volunteer"}>Volunteer</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#f3e8ea] h-16 flex items-center rounded-s-sm">
      <div className="px-5 flex items-center border w-full justify-between">
        <div>
          <figure>
            <Link to={"/"}>
              <img src={logo} alt="Blood Donate Logo" />
            </Link>
          </figure>
        </div>
        <div >
          <ul className="menu menu-horizontal p-0 text-red-800 font-semibold text-lg">{menuItems}</ul>
        </div>
        <div>
          <ul className="flex items-center space-x-3">
            <li className="border-2 rounded-md border-red-600 text-red-800 font-semibold px-4 py-1">
              <Link to={"/blog"}>Sign in</Link>
            </li>
            <li className="border-2 rounded-md  text-white bg-red-700 font-semibold px-4 py-1">
              <Link to={"/blog"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
