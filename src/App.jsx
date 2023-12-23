import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import Lectures from "./components/lectures";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <SideBar />
        <Routes>
          <Route path="/" element={<Lectures />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
