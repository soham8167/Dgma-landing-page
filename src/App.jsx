import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";
import Initiatives from "./components/Initiatives";
import FeaturedModules from "./components/Featured-modules";
import FeaturedStories from "./components/Featured-stories";
import MaritimeMapBanner from "./components/Maritime-map";
import HeroSection from "./components/HeroSection";
import StoryHub from "./pages/StoryHub";
import Shipping from "./components/Shipping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Initiatives />
                <FeaturedModules />
                <FeaturedStories />
                <MaritimeMapBanner />
              </>
            }
          />

          <Route index element={<HeroSection />} />
          <Route path="/ship-recycling" element={<Shipping />} />
          <Route path="/stories" element={<StoryHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
