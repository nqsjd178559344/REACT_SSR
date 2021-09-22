import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Provider } from 'react-redux'
import { createClientStore } from './store'

ReactDOM.render(
    <Provider store={createClientStore()}>
        <App />
    </Provider>, document.getElementById("root"));
