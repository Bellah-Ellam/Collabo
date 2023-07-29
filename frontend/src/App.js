import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import LandingPage from "./Pages/Landingpage";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import AuthProvider from "./Context/AuthContext";


function App() {
    return (
  
        <BrowserRouter>
            <AuthProvider>
            
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />}/>
                    <Route path="/Home" element={<Home />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/Register" element={<Register />}/>
                    <Route path="/Profile" element={<Profile />}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App