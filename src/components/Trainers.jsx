
import rahul from "../assets/rahul.png";
function Trainers() {
  const trainers = [
    {
      name: "Ahmed Khan",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500",
    },
    {
      name: "Rahul Sharma",
      role: "Cardio Expert",
      image: rahul,
    },
    {
      name: "Ali Hassan",
      role: "Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500",
    },
  ];

  return (
    <section className="trainers">
      <h1>Our Expert Trainers</h1>
      <p>Meet the professionals who will help you achieve your goals.</p>

      <div className="trainer-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.image} alt={trainer.name} />

            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;