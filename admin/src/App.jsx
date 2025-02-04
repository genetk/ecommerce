import { useEffect, useState ,useCallback} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const currency="usd"
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
        <Login setToken={handleSetToken} />
      ) : (
        <>
          <Navbar setToken={handleSetToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
