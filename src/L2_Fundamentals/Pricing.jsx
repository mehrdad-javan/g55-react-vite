import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Card from "./Card";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      description: [
        "Perfect for individuals starting out",
        "Includes essential features",
        "24/7 Email support",
        "Up to 2 team members",
      ],
      price: "19.99/month",
      image: "https://placehold.co/150",
      buttonText: "Choose Basic",
      color:"primary"
    },
    {
      id: 2,
      title: "Pro Plan",
      description: [
        "Ideal for small teams or startups",
        "Access to advanced tools",
        "Priority phone support",
        "Up to 10 team members",
      ],
      price: "49.99/month",
      image: "https://placehold.co/150",
      buttonText: "Choose Pro",
    color:"secondary"

    },
    {
      id: 3,
      title: "Enterprise Plan",
      description: [
        "Designed for large organizations",
        "Custom feature development",
        "Dedicated support team",
        "Unlimited team members",
      ],
      price: "99.99/month",
      image: "https://placehold.co/150",
      buttonText: "Choose Enterprise",
      color:"info"
    },
  ];

  const handlePurchase = (plan) => {
    alert(`You selected the ${plan} plan!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Pricing Plans</h1>
      <div className="text-end mb-3">
        <FaShoppingCart
          className="fs-4"
          role="button"
          onClick={() => alert("View Cart")}
        />
      </div>
      <div className="row">
        {pricingPlans &&
          pricingPlans.map((plan) => (
            <Card
              title={plan.title}
              description={plan.description}
              image={plan.image}
              buttonText={plan.buttonText}
              buttonAction={()=> handlePurchase(plan.title)}
              color={plan.color}
            />
          ))}
      </div>
    </div>
  );
};

export default Pricing;
