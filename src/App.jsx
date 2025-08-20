// rcc
// rsf
//rafce
import React from "react";
import Navbar from "./L1_Fundamentals/Navbar";
import Header from "./L1_Fundamentals/Header";
import Content from "./L1_Fundamentals/Content";
import StudentTable from "./L1_Fundamentals/practice/StudentTable";
import AlertMessage from "./L2_Fundamentals/AlertMessage";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaShoppingCart,
} from "react-icons/fa";
import Pricing from "./L2_Fundamentals/Pricing";
import Counter from "./L2_Fundamentals/Counter";
import LikeButton from "./L2_Fundamentals/LikeButton";
import PersonForm from "./L2_Fundamentals/PersonForm";
import LifecycleDemo from "./L3_Hooks/LifecycleDemo";
import FlightBooking from "./L3_Hooks/FlightBooking";
import FlightBookingUseForm from "./L3_Hooks/FlightBookingUseForm";
import ShoppingCart from "./L3_hooks/reducer/ShoppingCart";
import AppCtx from "./L3_hooks/context/AppCtx";
import PasswordStrengthChecker from "./L3_hooks/ref/PasswordStrengthChecker";

const App = () => {
  // define js variables
  // define js functions

  return (
    <>
      {/*
      <Navbar />
      <Content />
      <StudentTable />
      

      <div className="container">
        <h2>state ex 1</h2>
        <Counter />
        <h2>state ex 2</h2>
        <LikeButton />
        <h2>state ex 3</h2>
        <PersonForm />

        <h2>props ex 1</h2>
        <AlertMessage
          message="Operation is Done."
          alertType="alert-success"
          icon={<FaCheckCircle />}
        />
        <AlertMessage
          message="Error occured during operation!"
          alertType="alert-danger"
          icon={<FaExclamationTriangle />}
        />
        <AlertMessage
          message="Please review befor proceeding."
          alertType="alert-warning"
        />

        <h2>props ex 2</h2>
        <Pricing />
      </div>
      */}
      <PasswordStrengthChecker />
      <AppCtx />
      <ShoppingCart />
    </>
  );
};

export default App;
