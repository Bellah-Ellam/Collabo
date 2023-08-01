// app/assets/javascripts/channels/notification.js
App.notification = App.cable.subscriptions.create('NotificationChannel', {
    received: function(data) {
      // Handle the received data and display the notification to the user
    }
  });
  