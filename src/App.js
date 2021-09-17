import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

const App = () => {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3e3f42";
      showAlert("Dark Mode has been enabled!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled!", "success");
    }
  }
  return (
    <>
      <Router>
         <Navbar title="TextTract" aboutText="About" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
             <div className="container my-3">
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             <Switch>
             <Route exact path="/about">
                   <About aboutText="About"/>
             </Route>
             <Route exact path="/">
                   <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
             </Route>
             </Switch>
            </div>
    </Router>
    </>
  )
};

export default App;
