import React, { Component, Fragment } from "react";
class Xiaojiejie extends Component {
  //js的构造函数，由于其他任何函数执行
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法(这里的我父类是那个？就是上面的Component)
    //这个案例中的所有的数据都放在this.state里面．
    this.state = {
      inputValue: "", // input中的值
      list: [], //服务列表
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* １．对input进行数据绑定,如下代码．但是这个这个时候你在ｉｎｐｕｔ中敲代码，但是无论你如何敲键盘,你都会发现这个input中的数据没有任何变化，因为这里我们采用的是＂数据绑定＂，但是如上构造函数中的this.state.inputValue这个数据没有发生任何变化，所以这里是不会发生任何变化的．所以接下去我们要学习信的知识点－＞事件绑定*/}
          {/* <input value={this.state.inputValue} />  */}
          {/* ２．事件绑定 ，加入onChange，监听状态值的变化*/}
          {/* <input value={this.state.inputValue} onChange={this.inputChange} /> */}
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          　<button> 增加服务 </button>
        </div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </Fragment>
    );
  }
  //事件绑定函数写这里（写在render外面）
  inputChange(e) {
    /* 写完之后，运行代码，在界面中的input写入值，可以发现报错了：
    
    xiaojiejie.js:31 Uncaught TypeError: Cannot read property 'state' of undefined

    －＞　其实我们范了两个错误：
    １．一个是this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
    ２．另一个是React中改变值需要使用this.setState方法。

    
    * １．第一个错误很好解决，直接再JSX部分，利用bind进行绑定就好：
     <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    * 2. 这步做完，我们还需要加入setState方法，改变值:
            inputChange(e){
            // console.log(e.target.value);
            // this.state.inputValue=e.target.value;
            this.setState({
                inputValue:e.target.value
            })
        }
    */

    // this.state.inputValue = e.target.value;

    this.setState({
      inputValue: e.target.value,
    });
  }
}
export default Xiaojiejie;
