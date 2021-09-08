import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
const Home = () => {
    return <div className="home-page">
        我是HOME
        <NavLink to='/about'>跳转至about</NavLink>
        </div>
};

export default Home;
