import './css/App.css';
import Home from "./Home";
import NotFound from "./PageNotFound";
import ToDO from "./ToDO";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* 404 rounte */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/to-do" element={<ToDO />} />
          <Route exact path="/404/" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404/" />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
