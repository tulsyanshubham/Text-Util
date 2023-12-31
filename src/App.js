import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Textarea from "./Components/Textarea";
import About from "./Components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#110d1e';
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled","success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{setAlert(null)},1500)
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert ={alert} />
        <div className="container">
        <Routes>
          <Route exact path="/Text-Util" element={<Textarea heading="Enter your text here" mode={mode} showAlert ={showAlert}/>}/>
          <Route exact path="/Text-Util/about" element={<About mode={mode} />}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
