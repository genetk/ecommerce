import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
const Sidebar = () => {
    return (_jsx("div", { className: 'w-[18%] min-h-screen border-r-2', children: _jsxs("div", { className: 'flex flex-col gap-4 pt-6 pl-[20%] text-[15px]', children: [_jsxs(NavLink, { className: 'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l', to: "/add", children: [_jsx("img", { className: 'w-5 h-5', src: assets.add_icon, alt: "" }), _jsx("p", { className: 'hidden md:block', children: "Add Items" })] }), _jsxs(NavLink, { className: 'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l', to: "/list", children: [_jsx("img", { className: 'w-5 h-5', src: assets.order_icon, alt: "" }), _jsx("p", { className: 'hidden md:block', children: "List Items" })] }), _jsxs(NavLink, { className: 'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l', to: "/orders", children: [_jsx("img", { className: 'w-5 h-5', src: assets.order_icon, alt: "" }), _jsx("p", { className: 'hidden md:block', children: "Orders" })] })] }) }));
};
export default Sidebar;
