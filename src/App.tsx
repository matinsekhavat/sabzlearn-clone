import { Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import HomePage from "./pages/HomePage";

import Courses from "./pages/Courses";
import FilterProvider from "./context/FilterContext";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/courses"
          element={
            <FilterProvider>
              <Courses />
            </FilterProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
