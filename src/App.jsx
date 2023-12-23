import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import Lectures from "./components/lectures";
import Courses from "./components/features/Courses";
import Tutors from "./components/features/Tutors";
import Rooms from "./components/features/Rooms";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <SideBar />
        <Routes>
          <Route path="/" element={<Lectures />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
