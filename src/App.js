import Bonuses from "./components/Bonuses";
import CollegesList from "./components/CollegesList";
import FAQItem from "./components/FAQItem";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CollegesList />
      <Bonuses />
      <FAQItem />
      <Footer />
    </div>
  );
}

export default App;
