import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('http://localhost:5000/api/notifications');
      setNotifications(response.data);
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    await axios.post(`http://localhost:5000/api/notifications/read/${id}`);
    setNotifications(notifications.filter(notification => notification._id !== id));
  };

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            {notification.message}
            <button onClick={() => markAsRead(notification._id)}>Mark as Read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
