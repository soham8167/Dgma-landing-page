import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";
import Initiatives from "./components/Initiatives";
import FeaturedModules from "./components/Featured-modules";
import FeaturedStories from "./components/Featured-stories";
import MaritimeMapBanner from "./components/Maritime-map";

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
                <FeaturedModules/>
                <FeaturedStories/>
                <MaritimeMapBanner/>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
