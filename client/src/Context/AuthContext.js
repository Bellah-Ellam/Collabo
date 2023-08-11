
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({token: null}); // Initialize to null

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
          localStorage.setItem("authToken", response.token);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged In successfully!",
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

  // // Register
  // const register = (username, email,password, password_confirmation) => {
  //   // Post this data to the backend
  //   fetch("/api/v1/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       if (response.error) {
  //         Swal.fire("Error", response.error, "error");
  //       } else if (response.success) {
  //         navigate("/login");
  //         Swal.fire("Success", response.success, "success");
  //         setChange(!change);
  //       } else {
  //         console.log("Problem");
  //         Swal.fire("Error", "Something went wrong", "error");
  //       }
  //     });
  // };

  // Register
const register = (username, email, password, password_confirmation, profile_picture, date_of_birth) => {
  // Post this data to the backend
  fetch("/api/v1/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      username,
      email,
      password,
      password_confirmation,
      profile_picture,
      date_of_birth
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
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
    fetch("/api/v1/logout", {
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
        // Clear authentication token from local storage
        localStorage.removeItem("authToken");
        setCurrentUser(null); // Reset the currentUser state to null
        setChange(!change);
      });
  };

  // Check if the user is authenticated on page load
  useEffect(() => {
    const fetchCurrentUser = () => {
      // Retrieve the authentication token from local storage
      const token = localStorage.getItem("authToken");

      if (token) {
        fetch("/api/v1/current_user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then ((response) => response.json())
          .then((res) => {
            console.log("Trying", res)
            if (res.user) {
              console.log("Trying2", res)
              setCurrentUser(res.user)
            } else {
              throw new Error("Unauthorized");
            }
          })
          // .then((response) => {
          //   setCurrentUser(response);
          // })
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
    currentUser,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    </>
  );
}