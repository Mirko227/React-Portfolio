import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HoverTrailer from "./components/HoverTrailer";

function App() {
 
  return (
    <>
        <HoverTrailer />
        <Navbar />
        <Outlet /> 
    </>
  );
}

export default App;
