import { Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}

export default App;
