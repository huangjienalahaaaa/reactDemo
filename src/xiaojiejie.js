import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
// １．引入axios
import axios from "axios";
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"],
    };
  }
  // 2.引入完axios之后，推荐是在componentDidMount周期函数(它的意思是：在dom加载完之后，自动运行这个函数)中使用.．但是为什么要在这个周期函数中里面呢？比如说，我们在render()中使用axios.post()的话，你会发现这个render是有问题的，每次数值发生了变化，都会render(),也都会重新请求一次远程数据，这样很容易会将我们的远程数据搞垮，比如说，一下次几万人请求远程数据，一直在渲染一直在渲染，这肯定是不行的．那么在componentWillMount()函数中使用axios请求远程数据呢？我用了一段时间，发现感觉起来是没有任何问题的．但是知道学了React Native之后，你会发现在这个里面写是有问题的．
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
