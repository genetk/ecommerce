
import React,{ useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Add = React.lazy(() => import("./pages/Add"));
const List = React.lazy(() => import("./pages/List"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Login = React.lazy(() => import("./components/Login"));

export const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const currency = "usd";

const App = () => {
  const storedToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("token", token);
    }, 300); 
    return () => clearTimeout(timeout);
  }, [token]);

  const handleSetToken = useCallback((newToken) => {
    setToken(newToken);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Login setToken={handleSetToken} />
        </React.Suspense>
      ) : (
        <>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Navbar setToken={handleSetToken} />
          </React.Suspense>
          <hr />
          <div className="flex w-full">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Sidebar />
            </React.Suspense>
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
