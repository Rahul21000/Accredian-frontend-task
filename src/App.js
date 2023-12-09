import "./App.css";
import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Navbar />} /> */}
          <Route exact path="/" element={<Signin />} />
          <Route exact path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
