import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Tutor } from "./pages/Tutor";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="tutor" element={<Tutor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
