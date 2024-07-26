import React from 'react';

const Notification = ({ message, onMarkAsRead }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onMarkAsRead}>Mark as Read</button>
    </div>
  );
};

export default Notification;
