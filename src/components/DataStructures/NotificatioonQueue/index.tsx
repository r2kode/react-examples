import { useState } from "react";
import { faker } from "@faker-js/faker";

export function NotificationQueue() {
  const [notifications, setNotifications] = useState<string[]>([]);
  const addNotification = () => {
    setNotifications((prev) => {
      return prev.concat(`${faker.name.firstName()} joined`);
    });
    setTimeout(() => setNotifications((prev) => prev.slice(1)), 2000);
  };

  return (
    <>
      <h3>NotificationQueue</h3>
      <div>
        <button onClick={() => addNotification()}>
          Invite User To Community
        </button>

        <aside>
          {notifications.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </aside>
      </div>
    </>
  );
}
