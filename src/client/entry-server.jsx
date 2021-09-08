import React from "react";
import { Routes } from "./router";
import { StaticRouter as Router } from "react-router-dom";

export default (ctx) => {
  // 服务端传入
  // !ctx[上下文]: 客户端|服务端中间的载体,比如传些数据等
  //   console.log(ctx, "ctx");
  return new Promise((resolve) => {
    return resolve(<Router location={ctx.request.url}>{Routes()}</Router>);
  });
};
