function Programs() {
  const programs = [
    {
      title: "Weight Training",
      description: "Build muscle strength with modern equipment.",
      icon: "🏋️",
    },
    {
      title: "Cardio Fitness",
      description: "Improve stamina and burn calories effectively.",
      icon: "🏃",
    },
    {
      title: "CrossFit",
      description: "High intensity workouts for maximum results.",
      icon: "🔥",
    },
    {
      title: "Nutrition Guidance",
      description: "Personalized diet plans from experts.",
      icon: "🥗",
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching for faster progress.",
      icon: "💪",
    },
    {
      title: "Yoga & Stretching",
      description: "Increase flexibility and reduce stress.",
      icon: "🧘",
    },
  ];

  return (
    <div className="programs-page">
      <h1>Our Programs</h1>
      <p>Choose the training program that fits your goals.</p>

      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h2>{program.icon}</h2>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;