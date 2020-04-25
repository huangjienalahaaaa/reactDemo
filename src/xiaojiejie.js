import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
import axios from "axios";
import Boss from "./Boss";
import "./style.css";


//1.引入transitionGrop和CSSTransition库。接下去你有了transitionGrop，你就可以使用多dom了。
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"],
    };
  }
  componentDidMount() {
    axios
      .post("https://web-api.juejin.im/v3/web/wbbr/bgeda")
      .then((res) => {
        console.log("axios 获取数据成功:" + JSON.stringify(res));
      })
      .catch((error) => {
        console.log("axios 获取数据失败" + error);
      });
  }
  render() {
    return (
      <Fragment>
        <div>
          <label html="jspang">增加服务</label>
          <input
            id="jspang"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            /*
              2.在循环的外面加上<TransitionGroup>标签：
                -> 这个需要放在循环的外边，这样才能形成一个组动画,但是只有这个<TransitonGroup>是不够的，你还是需要加入<CSSTransition>,来定义动画。
            */
          }
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  // 3.加入<CSSTranstion>标签：（因为这个动画效果是控制XiaojiejieItem的，所以在XiaojiejieItem上面写）
                  <CSSTransition CSSTransition CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true} //如果你想要它出现的时候就有这个动画效果，就加 appear={true} 
                    key={index + item} //因为这个是个循环，所以最外层需要一个key值
                  ></CSSTransition>
                  <XiaojiejieItem
                    key={index + item}
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                  />
                )
              })
            }
          </TransitionGroup>
        </ul>

        <Boss></Boss>
      </Fragment >
    );
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value,
    });
  }
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
export default Xiaojiejie;
