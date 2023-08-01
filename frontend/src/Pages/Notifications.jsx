import React, { useState, useEffect } from 'react';

const Notifications = () => {
  // State to manage the notification content
  const [notificationContent, setNotificationContent] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const handleNotificationsClick = () => {
      // Logic to fetch notifications data and display the notification
      fetch ('api/v1/notifications')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setShowNotification(true);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
      });
      
  }

  // Effect to show/hide the notification
  useEffect(() => {
    if (showNotification) {
      // Show the notification for 3 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [showNotification, setShowNotification]);

  // Render the notification component
  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      {notificationContent}
    </div>
  );
};

export default Notifications;
