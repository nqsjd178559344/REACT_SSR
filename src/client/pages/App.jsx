import React from "react";
import { Routes } from "../router";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => <Router basename="/">{Routes()}</Router>;
export default App;
