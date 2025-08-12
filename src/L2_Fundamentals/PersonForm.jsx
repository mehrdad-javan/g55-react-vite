import React, { useState } from "react";
import AlertMessage from "./AlertMessage";

const PersonForm = () => {
  const [email, setEmail] = useState("demo@test.se"); // mehrdad.javan@lexicon.se
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({ message: "", alertType: "" });

  const emailChangeHandler = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event
    console.log("##### ", event.target);
    const value = event.target.value;
    console.log("##### ", value);
    setEmail(value);
  };

  const clickHandler = () => {
    if (email.length < 5) {
      console.log("email is not valid!");
      setAlert({
        message: "Email must be at least 5 chars long",
        alertType: "alert-danger",
      });
    } else {
      setAlert({
        message: "Email is valid",
        alertType: "alert-success",
      });
    }
    setShowAlert(true);
  };

  return (
    <div className="container mt-3">
      {showAlert && (
        <AlertMessage message={alert.message} alertType={alert.alertType} />
      )}

      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email} // m
            onChange={emailChangeHandler}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Click Me
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setAlert({ message: "", alertType: "" });
            setEmail("");
            showAlert(false);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
