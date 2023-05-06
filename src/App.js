import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HeaderPidoras from "./pages/headerPidoras";
import FooterPidoras from "./pages/footerPidoras";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <HeaderPidoras />
        <Routes>
           <Route path={"Home"} Component={Home}/>
        </Routes>
      <FooterPidoras />
    </BrowserRouter>
  );
}

export default App;
