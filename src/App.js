/*
１．下面这句话是es6的＂结构赋值＂的语法形式，相当于：
  　１．　import React from "react";
    2.  consot Component = React.Component
  这两句话
*/

import React, { Component } from "react"; // 最新版本的react，后面不加;分号也没关系．老版本是一定要加分号的
class App extends Component {
  render() {
    return <div>Hello </div>;
  }
}
export default App;
