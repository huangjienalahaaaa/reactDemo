import React, { Component } from "react";

//1. 引入CSSTransition库
import { CSSTransition } from "react-transition-group";
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.toToggole = this.toToggole.bind(this);
  }
  render() {
    return (
      <div>
        {/*
          2.引入CSSTransition后便可以使用了，使用的方法就和使用自定义组件一样,直接写<CSSTransition>，而且不再需要管理className了，这部分由CSSTransition进行管理，如下（也就是说,<CSSTransition>定义的动画会增加到下面的 <div>BOSS级人物-孙悟空</div>组件上）：
          写完之后看style.css
          */}
        {/* <div className={this.state.isShow ? "show" : "hide"}>
          BOSS级人物-孙悟空
        </div> */}
        <CSSTransition
          in={this.state.isShow} //用于判断是否出现的状态
          timeout={2000} //动画持续时间
          classNames="boss-text" //className值，防止重复.接下来写css都要加上classNames的值表示前缀
          unmountOnExit //当组件退场的时候，dom也就被删除了
        ></CSSTransition>
        <div>BOSS级人物-孙悟空</div>
        <div>
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </div>
    );
  }
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true,
    });
  }
}

export default Boss;
