import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Header from "./components/Header/Header";
import StageShield from "./components/StageShield/StageShield";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
    <Header/>
    


    <StageShield/>

    
    <Footer/>
    </>
  );
}

export default App;
