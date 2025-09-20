import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import bgimage from "./assets/bg1.jpg";
import Success from "./pages/Success";
import Watchlist from "./pages/Watchlist";
import Home from "./pages/Home";
import { WatchListProvider } from "./context/WatchListContext";

function App() {
  const [eusername, setUsername] = useState("");
  const [epassword, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [userdata, setUserdata] = useState([
    {
      username: "nikhil@gmail.com",
      password: 123,
    },
  ]);

  const check = () => {
    axios
      .post("https://netflix-azev.onrender.com/success", {
        eusername,
        epassword,
        userdata,
      })
      .then((res) => {
        if (res.data === true) {
          navigate("/home");
        } else {
          alert("Invalid Username or password");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ✅ Apply background only on login & signup
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div
      className="w-screen min-h-screen flex flex-col"
      style={
        isAuthPage
          ? {
              backgroundImage: `url(${bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : { backgroundColor: "#000000", minHeight: "100vh" } // 🔴 red full height
      }
    >
      <WatchListProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setPassword={setPassword}
                setUsername={setUsername}
                check={check}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup setUserdata={setUserdata} userdata={userdata} />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </WatchListProvider>
    </div>
  );
}

export default App;
