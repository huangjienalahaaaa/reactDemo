import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//注意，在React有规定：如果是自定义组件，必须是要大写字母开头，来表示这是我们的自定义组件．所以引入自定义组件下面是App,如果引入的是app的话就报错了
ReactDOM.render(<App />, document.getElementById("root"));
