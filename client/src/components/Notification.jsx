import { useEffect } from "react";

export default function Notification({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: "fixed",
      top: 24,
      right: 24,
      background: "#fbbf24",
      color: "#fff",
      padding: "16px 32px",
      borderRadius: 8,
      boxShadow: "0 2px 8px #aaa",
      zIndex: 1000,
      fontWeight: "bold"
    }}>
      {message}
    </div>
  );
}