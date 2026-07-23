import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HeroSection />} />
          <Route path="/home" element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
