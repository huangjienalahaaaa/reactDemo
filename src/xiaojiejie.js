/*
 1. 小姐姐组件存在性能问题：，那就是子组件XiaojiejieItem频繁XiaojiejieItem组件(无用渲染render)
 　＊　那么如何去解决呢？->在XiaojiejieItem.js中使用shouldComponentUpdate就能解决

 */

import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"],
    };
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
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              <div key={item + index}>
                <XiaojiejieItem
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                ></XiaojiejieItem>
              </div>
            );
          })}
        </ul>
      </Fragment>
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
