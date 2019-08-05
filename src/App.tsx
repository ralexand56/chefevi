import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/home";
import Food from "./pages/food";
import Admin from "./pages/admin";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/food" component={Food} />
      <Route path="/admin" component={Admin} />
    </Router>
  );
};

export default App;
