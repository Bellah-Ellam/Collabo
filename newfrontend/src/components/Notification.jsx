import React, { useState, useEffect } from 'react';
import { Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Notification = () => {
 const [notifications, setNotifications] = useState([]);
 const [notificationsCount, setNotificationsCount] = useState(0);

 useEffect(() => {
   // Check if the user is authenticated (JWT token is present)
   const authToken = localStorage.getItem('authToken');
   if (!authToken) {
     // Handle the case when the user is not authenticated
     // You might want to redirect to the login page or show an error message
     console.error('User not authenticated. Please log in.');
     return;
   }

   fetchNotifications(authToken);
 }, []);

 const fetchNotifications = async () => {
  try {
    const response = await fetch('/api/v1/notifications', {
      headers: {
        Authorization: localStorage.getItem("authToken")
      },
    });
    if (response.ok) {
      const notificationsData = await response.json();
      setNotificationsCount(notificationsData.length); // Update the count
    } else {
      console.error('Error fetching notifications:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
};

 const markNotificationAsRead = async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('User not authenticated. Please log in.');
        return;
      }

      const response = await fetch(`/api/v1/notifications/mark_as_read/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('authToken'),
        },
      });
  
      if (response.ok) {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === id ? { ...notification, read_status: true } : notification
          )
        );
      } else {
        console.error('Error marking notification as read:', response.statusText);
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

 return (
  <div>
  <h2>Notifications</h2>
  <ul>
    {notifications.map((notification) => (
      <li
        key={notification.id}
        style={{ fontWeight: notification.read_status ? 'normal' : 'bold' }}
        onClick={() => markNotificationAsRead(notification.id)}
      >
        {notification.message}
      </li>
    ))}
  </ul>
</div>

 );
};

export default Notification;
