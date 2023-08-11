import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './topbar/Topbar';
 import { Notifications } from '@material-ui/icons';
import './notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState(0);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error('User not authenticated. Please log in.');
      return;
    }

    fetchNotifications(authToken);
  }, []);

  const fetchNotifications = async (authToken) => {
    try {
      const response = await fetch('/api/v1/notifications', {
        headers: {
          Authorization: authToken,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        const notificationsData = data.notifications; // Extract notifications array
        setNotifications(notificationsData); // Update the notifications data
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

      const response = await fetch(`/api/v1/notifications/${id}/mark_as_read`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
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
      <Topbar/>
      <div className='notifications'>
        <h2>
          <Notifications /> 
          Notifications 
        </h2>
        <ul className='list'>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              style={{ color: notification.read_status ? 'black' : 'red' }}
              onClick={() => markNotificationAsRead(notification.id)}
            >
              <p>{notification.action_type}</p>
              <p>{notification.timestamp}</p>
              <p>{notification.content}</p>
              {/* <Link to={`/post/${notification.postId}`}>View Post</Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;

