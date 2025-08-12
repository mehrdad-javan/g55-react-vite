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

const App = () => {
  // define js variables
  // define js functions

  return (
    <>
      {/*
      <Navbar />
      <Content />
      <StudentTable />
      */}

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
    </>
  );
};

export default App;
