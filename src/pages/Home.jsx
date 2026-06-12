import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Trainers from "../components/Trainers";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />

      <section style={{ padding: "50px" }}>
        <h1>Our Programs</h1>

        <div>
          <h3>🏋️ Weight Training</h3>
          <h3>🏃 Cardio Training</h3>
          <h3>💪 Strength Building</h3>
        </div>
      </section>
         <Trainers />
             <Gallery />
              <Footer />
      

      <Plans />
        

      <section style={{ padding: "50px" }}>
        <h1>Why Choose Us?</h1>
        <p>
          Professional Trainers, Modern Equipment,
          Personal Guidance and Nutrition Support.
        </p>
      </section>
    </>
  );
}

export default Home;