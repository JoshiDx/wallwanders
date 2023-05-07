import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HeaderPidoras from "./pages/headerPidoras";
import FooterPidoras from "./pages/footerPidoras";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Posters from "./pages/Posters";

function App() {
  return (
    <BrowserRouter>
      <HeaderPidoras />
        <Routes>
           <Route path={"/"} Component={Home}/>
            <Route path={"catalog"} Component={Catalog}/>
            <Route path={"posters"} Component={Posters}/>
        </Routes>
      <FooterPidoras />
    </BrowserRouter>
  );
}

export default App;
