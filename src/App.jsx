import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Diagnosis from "./pages/Diagnosis";
import Navigation from "./components/Navbar";
import Mealplan from "./components/MealPlan";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import "./styles.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
