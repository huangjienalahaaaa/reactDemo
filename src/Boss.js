// 动画组件
import React, { Component } from "react";
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //1. '显示隐藏' 要实现这个业务逻辑，先在constructor里增加state值isShow
      isShow: true,
    };
    //4. 在constructor里绑定一下this
    this.toToggole = this.toToggole.bind(this);
  }
  render() {
    return (
      <div>
        <div className={this.state.isShow ? "show" : "hide"}>
          BOSS级人物-孙悟空
        </div>
        <div>
          {
            //3.有了toToggole方法后，可以给<button>加上onClick响应事件了，
          }
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </div>
    );
  }
  //2.需要点击按钮时，有响应的事件，所以需要一个方法，我们编写一个toToggole()方法，代码如下：
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true,
    });
  }
}

export default Boss;
