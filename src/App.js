import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import Link4 from "./pages/Link4";
import Home from "./pages/Home";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/link1' element={<Link1 />} />
        <Route path='/link2' element={<Link2 />} />
        <Route path='/link3' element={<Link3 />} />
        <Route path='/link4' element={<Link4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
