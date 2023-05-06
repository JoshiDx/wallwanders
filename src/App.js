import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HeaderPidoras from "./pages/headerPidoras";

function App() {
  return (
    <BrowserRouter>
      <HeaderPidoras />
    </BrowserRouter>
  );
}

export default App;
