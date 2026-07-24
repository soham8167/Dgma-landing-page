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
import MaritimeTraining from "./pages/MaritimeTraining";
import MaritimeLeadership from "./pages/MaritimeLeadership";
import KnowledgeHub from "./pages/KnowledgeHub";
import MediaCentre from "./pages/MediaCentre";
import IndiaMap from "./pages/IndiaMap";
import Shipbuilding from "./pages/Shipbuilding";
import ScrollToTop from "./components/ScrollToTop";
import UniversalSearch from "./pages/Search";
import { SearchProvider } from "./search/SearchProvider";
import { registerSiteContent } from "./search/SearchContentRegistry";
import { getSearchIndex } from "./search/SearchIndex";
import AiAssistent from "./pages/AiAssistent";

registerSiteContent();

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider items={getSearchIndex()}>
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

            <Route path="/ship-recycling" element={<Shipping />} />
            <Route path="/stories" element={<StoryHub />} />
            <Route path="/training" element={<MaritimeTraining />} />
            <Route path="/leadership" element={<MaritimeLeadership />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/media-centre" element={<MediaCentre />} />
            <Route path="/india-map" element={<IndiaMap />} />
            <Route path="/shipbuilding" element={<Shipbuilding />} />
            <Route path="/search" element={<UniversalSearch />} />
            <Route path="/ai-assistant" element={<AiAssistent />} />
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
