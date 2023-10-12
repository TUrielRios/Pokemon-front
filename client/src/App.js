import { Route, Routes } from "react-router-dom";
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail';
import Create from "./Views/Create/Create";
import Error404 from "./Views/Error404/Error404";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
