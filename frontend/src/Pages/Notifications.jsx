import React, { useState, useEffect } from 'react';

const Notifications = ({ showNotification, setShowNotification }) => {
  // State to manage the notification content
  const [notificationContent, setNotificationContent] = useState('');

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
