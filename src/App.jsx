import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;