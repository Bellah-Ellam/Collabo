import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const AuthContext = createContext();

export default function AuthProvider({children}) 
{
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(false)

    const [change, setChange] = useState(true)

    // login
    const login = (username, password) =>{
        fetch("/api/v1/login",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        .then(response=>{
            // console.log(response)
            if(response.error)
            {
                 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.error,
                })
            }
            else if(response.success)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LoggedIn successfully!',
                    timer: 1500
                  })
                navigate("/")
                setChange(!change)

            }
            else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops...',
                    text: "Something went wrong!",
                    timer: 3000
                })

            }
            
        })
    }

    // Register
    const register = (username, name, email, photo, doB,  password, password_confirmation) =>{
        // Post this data to the backend
        fetch("/api/v1/signup",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({username, name, photo, doB,email , password, password_confirmation})
        })
        .then(res=>res.json())
        .then((response) => {
            // console.log(response);
            if (response.errors) {
              Swal.fire("Error", response.error, "error");
            } 
            else if (response.success) {
              navigate("/login");
              Swal.fire("Success", response.success, "success");
              setChange(!change)
              
            } 
            else {
                console.log("Problem")
              Swal.fire("Error", "Something went wrong", "error");
            }
        });
        
    }

    // Logout
    const logout = () =>{
        fetch("/api/v1/logout",{
            method: "DELETE",

        })
        .then(res=>res.json())
        .then((response)=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logged out successfully!',
                timer: 300
            })
            navigate("/login")
            setCurrentUser()
            setChange(!change)

        })
    }
   
    // check current user
    useEffect(()=>{
        fetch("/api/v1/current_user",{
            method: "GET",
        })
        .then(res=>res.json())
        .then(response=>{
            setCurrentUser(response)
            console.log(response)

        })
    }, [change])

    const contextData = {
        login, 
        register, 
        logout,
        currentUser
    }
// New
  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}

