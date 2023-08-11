import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
// import Topbar from "./components/topbar/Topbar";
// import Sidebar from "./components/sidebar/Sidebar";
// import Feed from "./components/feed/Feed";
// import Rightbar from "./components/rightbar/Rightbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import Notification from "./components/Notification";

function App() {
  return (
        <BrowserRouter>
  
            
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </AuthProvider>

        </BrowserRouter>
  )
}

export default App;
