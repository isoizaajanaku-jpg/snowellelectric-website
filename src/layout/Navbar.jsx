import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [visitorCount, setVisitorCount] = useState(0);

  // useEffect(() => {
  //   let visitors = localStorage.getItem("visitors");

  //   if (!visitors) {
  //     visitors = 1;
  //   } else {
  //     visitors = Number(visitors) + 1;
  //   }

  //   localStorage.setItem("visitors", visitors);
  //   setVisitorCount(visitors);
  // }, []);

  return (
    <nav className="bg-black text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Snowell Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
              Snowell Electric
            </h1>
            {/* 
           <p className="text-sm">Visitors: {visitorCount}</p> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            About Us
          </NavLink>

           <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Products
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-center bg-gray-900 p-4 rounded-xl">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Contact Us
          </NavLink>

           <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
