import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./index.css";
const About = () => {
  const [useInfo, setUseInfo] = useState({ name: "" });
  useEffect(() => {
    axios.get("http://localhost:3000/api/getUserInfo").then((res) => { //! koa配置解决跨域
      setUseInfo(res.data.data);
    });
  }, []);
  return (
    <div className="about-page">
      我是About
      {useInfo.name}
      {/* <NavLink to='/'/> */}
      <NavLink to="/">跳转至home</NavLink>
    </div>
  );
};

export default About;
