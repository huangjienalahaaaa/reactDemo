import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
import axios from "axios";
import Boss from "./Boss";
import "./style.css";
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

        <Boss></Boss>
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
