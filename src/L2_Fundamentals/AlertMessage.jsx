import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AlertMessage = ({ message, alertType, icon }) => {
  return (
    <>
      {message && alertType && (
        <div className={`alert ${alertType}`}>
          <span className="me-2">{icon ? icon : <FaCheckCircle />}</span>
          {message}
        </div>
      )}
    </>
  );
};

export default AlertMessage;
