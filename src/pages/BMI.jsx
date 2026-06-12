import { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    const result = weight / (h * h);

    setBmi(result.toFixed(1));
  };

  return (
    <div className="bmi-page">
      <h1>BMI Calculator</h1>

      <div className="bmi-card">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <h2>
            Your BMI: {bmi}
          </h2>
        )}
      </div>
    </div>
  );
}

export default BMI;