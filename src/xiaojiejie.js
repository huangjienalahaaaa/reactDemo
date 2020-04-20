// 要想使用<Fragment>，需要先进行引入
import React, { Component, Fragment } from "react";

// Xiaojiejie extends(继承)　Component，说明这是一个组件．
class Xiaojiejie extends Component {
  render() {
    return (
      // 把最外层的<div>标签，换成<Fragment>标签
      <Fragment>
        <div>
          <input /> <button> 增加服务 </button>
        </div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </Fragment>
    );
  }
}
// 将组件暴露出去，让外面能够引用到
export default Xiaojiejie;
