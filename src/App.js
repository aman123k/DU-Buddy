import { useState } from "react";
import Bonuses from "./components/Bonuses";
import CollegesList from "./components/CollegesList";
import FAQItem from "./components/FAQItem";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`App ${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <CollegesList />
      <Bonuses />
      <FAQItem />
      <Footer />
    </div>
  );
}

export default App;
