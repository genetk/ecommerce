import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { assets } from '../assets/assets';
const Navbar = ({ setToken }) => {
    return (_jsxs("div", { className: 'flex items-center py-2 px-[4%] justify-between', children: [_jsx("img", { className: 'w-[max(10%,80px)]', src: assets.logo, alt: "" }), _jsx("button", { onClick: () => setToken(''), className: 'bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm', children: "Logout" })] }));
};
export default Navbar;
