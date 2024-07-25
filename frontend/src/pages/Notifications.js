// src/components/Notifications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/notifications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(response.data);
    };
    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    await axios.post(`http://localhost:5000/api/notifications/read/${id}`);
    setNotifications(notifications.map(n => n._id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((n) => (
        <div key={n._id} className={n.read ? 'read' : 'unread'}>
          <p>{n.message}</p>
          <button onClick={() => markAsRead(n._id)}>Mark as Read</button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
