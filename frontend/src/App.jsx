import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <>
      {/* First => We need the Navbar component, which is static accross pages */}
      <Navbar />
      <Routes>
        {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-product" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
