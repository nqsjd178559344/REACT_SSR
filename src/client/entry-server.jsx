import React from "react";
import { Routes, routes } from "./router";
import { StaticRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createServerStore } from './store'

export default (ctx) => {
  // 服务端传入
  // !ctx[上下文]: 客户端|服务端中间的载体,比如传些数据等
  // ! ssr较慢可能原因:1. API较慢(Promise.all) => 可酌情减少API请求 2. css对比link模式与style模式,style模式会拖慢ssr速度=> 服务端需要通过内联样式返回,故文件较大;link模式可能会页面闪烁[样式获取从服务端请求,页面为直接传输],故样式请求完后才会正常显示 *自己取舍*
  return new Promise((resolve) => {
    const promises = []
    routes.forEach(route => {
      if (route.path === ctx.request.path && route.loadData) {
        promises.push(route.loadData())
      }
    })
    Promise.all(promises).then(data => {
      const apiData = data.length && data[0].data.data
      // console.log(apiData)
      ctx.apiData = apiData
      return resolve(<Provider store={createServerStore()}>
        <Router location={ctx.request.path}>{Routes()}</Router>
      </Provider>);
    })
  });
};
