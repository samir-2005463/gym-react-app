function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: [
        "Gym Access",
        "Locker Facility",
        "Basic Support",
      ],
    },
    {
      name: "Standard",
      price: "₹1499",
      features: [
        "Gym Access",
        "Personal Trainer",
        "Diet Plan",
      ],
    },
    {
      name: "Premium",
      price: "₹2499",
      features: [
        "All Features",
        "1-on-1 Coaching",
        "Premium Support",
      ],
    },
  ];

  return (
    <div className="plans-page">
      <h1>Membership Plans</h1>
      <p>Choose the plan that matches your fitness goals.</p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.name}</h2>

            <h1>{plan.price}</h1>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>

            <button onClick={() => alert("Thank you for joining FitZone Gym!")}>
  Join Now
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;