import { useState } from "react";

function Plans() {
  const [selectedPlan, setSelectedPlan] =
    useState("None");

  const plans = [
    {
      name: "Basic",
      price: "₹999/month",
    },
    {
      name: "Standard",
      price: "₹1499/month",
    },
    {
      name: "Premium",
      price: "₹2499/month",
    },
  ];

  return (
    <section className="plans">
      <h2>Membership Plans</h2>

      <div className="cards">
        {plans.map((plan) => (
          <div
            className="card"
            key={plan.name}
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>

            <button
              onClick={() =>
                setSelectedPlan(plan.name)
              }
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <h3 className="selected">
        Selected Plan: {selectedPlan}
      </h3>
    </section>
  );
}

export default Plans;