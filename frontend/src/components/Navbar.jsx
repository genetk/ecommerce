import { useContext, useState, useCallback } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = useCallback(() => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  }, [navigate, setToken, setCartItems]);

  const handleSearchClick = useCallback(() => {
    setShowSearch(true);
    navigate("/collection");
  }, [setShowSearch, navigate]);

  const handleProfileClick = () => {
    if (token) {
      setDropdownVisible(!dropdownVisible);
    } else {
      navigate("/login");
    }
  };

  const menuItems = [
    { to: "/", label: "HOME" },
    { to: "/collection", label: "COLLECTION" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Golden Shop Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {menuItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="flex flex-col items-center gap-1">
            <p>{item.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={handleSearchClick} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

        <div className="group relative">
          <img onClick={handleProfileClick} className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          {dropdownVisible && token && (
            <div className="absolute right-0 pt-4 bg-slate-100 text-gray-500 rounded">
              <div className="flex flex-col gap-2 w-36 py-3 px-5">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-300 transform ${visible ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          {menuItems.map((item) => (
            <NavLink key={item.to} onClick={() => setVisible(false)} className="py-2 pl-6 border" to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

