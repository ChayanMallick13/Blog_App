import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="h-screen bg-slate-500">
      
      <Routes>
        <Route path="/" elements={<Home/>} />
        <Route path="/poetry" elements={<Home/>} />
        <Route path="/literature" elements={<Home/>} />
        <Route path="/story" elements={<Home/>} />
        <Route path="/poems" elements={<Home/>} />
      </Routes>
    </div>
  );
};

export default App;
