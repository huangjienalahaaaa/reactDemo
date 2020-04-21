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
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div key={item + index}>
                {/* 1.父组件向子组件传递很简单：就是在属性值上面传递，如下通过content属性与index属性来向子组件传值(还有传递了deleteItem事件，为了子组件向父组件传递消息)： */}
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
  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
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
