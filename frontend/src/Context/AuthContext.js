// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"

// export const AuthContext = createContext();

// export default function AuthProvider({children}) 
// {
//     const navigate = useNavigate()

//     const [currentUser, setCurrentUser] = useState(false)

//     const [change, setChange] = useState(true)

//     // login
//     const login = (email, password) =>{
//         fetch("api/v1/login",{
//             method: "POST",
//             headers:{"Content-Type": "application/json"},
//             credentials: 'include',
//             body: JSON.stringify({email, password})
//         })
//         .then(res=>res.json())
//         .then(response=>{
//             console.log(response)
//             if(response.error)
//             {
                 
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: response.error,
//                 })
//             }
//             else if(response.success)
//             {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'LoggedIn successfully!',
//                     timer: 1500
//                   })
//                 navigate("/")
//                 setChange(!change)

//             }
//             else{
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: "Something went wrong!",
//                     timer: 3000
//                 })

//             }
            
//         })
//     }

//     // Register
//     const register = (name, username, email, photo, doB, bio,  password, password_confirmation) =>{
//         // Post this data to the backend
//         fetch("api/v1/signup",{
//             method: "POST",
//             headers:{"Content-Type": "application/json"},
//             body: JSON.stringify({name, username, email, photo, doB, bio, password, password_confirmation})
//         })
//         .then(res=>res.json())
//         .then((response) => {
//             // console.log(response);
//             if (response.error) {
//               Swal.fire("Error", response.error, "error");
//             } 
//             else if (response.success) {
//               navigate("/login");
//               Swal.fire("Success", response.success, "success");
//               setChange(!change)
              
//             } 
//             else {
//                 console.log("Problem")
//               Swal.fire("Error", "Something went wrong", "error");
//             }
//         });
        
//     }

//     // Logout
//     const logout = () =>{
//         fetch("api/v1/logout",{
//             method: "DELETE",

//         })
//         .then(res=>res.json())
//         .then((response)=>{
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Logged out successfully!',
//                 timer: 300
//             })
//             navigate("/login")
//             setCurrentUser(null)
//             setChange(!change)

//         })
//     }
   
//     // check current user
//     useEffect(()=>{
//         fetch("api/v1/current_user",{
//             method: "GET",
//         })
//         .then(res=>res.json())
//         .then(response=>{
//             setCurrentUser(response)
//             console.log(response)

//         })
//     }, [change])


//     const contextData = {
//         login, 
//         register, 
//         logout,
//         currentUser
//     }
// // New
//   return (
//     <>
//      <AuthContext.Provider value={contextData}>
//         {children}
//      </AuthContext.Provider>
//     </>
//   )
// }
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null); // Initialize to null

  const [change, setChange] = useState(true);

  // login
  const login = (email, password) => {
    fetch("api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
          });
        } else if (response.token) {
          // Token received from the server
          // Store the token in local storage or state
          // Example: localStorage.setItem("authToken", response.token);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "LoggedIn successfully!",
            timer: 1500,
          });
          navigate("/");
          setChange(!change);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            timer: 3000,
          });
        }
      });
  };

  // Register
  const register = (name, username, email, photo, doB, bio, password, password_confirmation) => {
    // Post this data to the backend
    fetch("api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, email, photo, doB, bio, password, password_confirmation }),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          navigate("/login");
          Swal.fire("Success", response.success, "success");
          setChange(!change);
        } else {
          console.log("Problem");
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  // Logout
  const logout = () => {
    fetch("api/v1/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out successfully!",
          timer: 300,
        });
        navigate("/login");
        // Clear authentication token here (if applicable)
        // For example, remove the token from local storage or state
        setCurrentUser(null); // Reset the currentUser state to null
        setChange(!change);
      });
  };
  // check current user
  useEffect(() => {
    const fetchCurrentUser = () => {
      // Retrieve the authentication token from local storage or state
      // Example: const token = localStorage.getItem("authToken");
      const token = ""; // <-- Replace this with the actual code to retrieve the token

      if (token) {
        fetch("api/v1/current_user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Unauthorized");
            }
          })
          .then((response) => {
            setCurrentUser(response);
          })
          .catch((error) => {
            console.error("Error fetching current user:", error);
            setCurrentUser(null);
          });
      } else {
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, [change]);

    const contextData = {
        login, 
        register, 
        logout,
        currentUser
    }

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}