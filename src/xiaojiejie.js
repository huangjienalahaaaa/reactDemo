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
            // 1.定义ref:如果要使用ref来进行，需要现在JSX中进行绑定， 绑定时最好使用ES6语法中的箭头函数，这样可以简洁明了的绑定DOM元素。
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        {/* ３．使用中的坑：
         * 比如现在我们要用ref绑定取得要服务的数量，可以先用ref进行绑定，入下代码
         * 绑定后可以在addList()方法中，获取当前<div>的值.
         */}
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
  /*
    2.因为上面定义了ref,所以下面的函数，不需要参数e,所以里面的e.target.value可以直接用this.input.value代替．（以前的案例中，我们写了下面的代码，使用了e.target，这并不直观，也不好看。这种情况我们可以使用ref来进行解决）
  */
  // inputChange(e) {
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // }
  inputChange() {
    this.setState({
      inputValue: this.input.value,
    });
  }
  //   addList() {
  //     this.setState({
  //       list: [...this.state.list, this.state.inputValue],
  //       inputValue: "",
  //     });

  //     /*
  //  4.绑定后可以在addList()方法中，获取当前<div>的值，如下代码．
  //   console.log(this.ul.querySelectorAll("div").length);
  //     * 问题：
  //     这时候你打开控制台，点击添加服务按钮，你会返现数量怎么少一个？（就是这个坑），其实这个坑是因为React中更多setState是一个异步函数所造成的。也就是这个setState，代码执行是有一个时间的，如果你真的想了解清楚，你需要对什么是虚拟DOM有一个了解。简单的说，就是因为是异步，还没等虚拟Dom渲染，我们的console.log就已经执行了。

  //     * 解决：
  //     那这个代码怎么编写才会完全正常那，其实setState方法提供了一个回调函数，也就是它的第二个函数。下面这样写就可以实现我们想要的方法了。如下面的addList()函数
  // */
  //     console.log(this.ul.querySelectorAll("div").length);
  //   }

  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
        //关键代码--------------start
      },
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
    //关键代码--------------end
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
