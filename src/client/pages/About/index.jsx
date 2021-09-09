import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";

export const getUserInfo = () => {
  return axios.get("http://localhost:3000/api/getUserInfo")
  // return axios.get("http://localhost:3000/api/getUserInfo").then((res) => { //! koa配置解决跨域
  //   setUseInfo(res.data.data);
  // });
}

const About = () => {
  // const [useInfo, setUseInfo] = useState({ name: "" });
  // useEffect(() => { //! 如about为直接从服务端返回,则不必请求此,直接服务端返回页面+数据就好 => 注水脱水 => react-router中提供loadData写法
  //   axios.get("http://localhost:3000/api/getUserInfo").then((res) => { //! koa配置解决跨域
  //     setUseInfo(res.data.data);
  //   });
  // }, []);
  const name = useSelector(state => {
    return state.name
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (!name) {
      getUserInfo().then(res => {
        dispatch({
          type: "CHANGE_DATA",
          payload: res.data
        })
      })
    }
  })
  return (
    <div className="about-page">
      我是About
      {name}
      {/* <NavLink to='/'/> */}
      <NavLink to="/">跳转至home</NavLink>
    </div>
  );
};

export default About;
