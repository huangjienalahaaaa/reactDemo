import React, { Component, Fragment } from "react";
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"], //１．添加一些基础数据
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
          {/* ３.绑定一个方法this.addList */}　
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {/* ２．循环基础数据 */}
          {this.state.list.map((item, index) => {
            // return <li>{item}</li>;
            // ６．添加key值．这里你在工作中千万不能写成key={index}：因为你在工作中，你的索引值可能有很多项，即你的页面中可能有很多循环，这个时候你用索引可能就会重复，重复之后它也会报错．所以我们比较安全的方式，就是后面再加一个item,这样重复的概率就很小了．
            return <li key={index + item}>{item}</li>;
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
  //增加服务的按钮响应方法
  addList() {
    this.setState({
      /*
            4. 这里使用es6中的＂预算扩展符＂的这个东西，就是...这三个点：
            ...this.state.list代表：将this.state.list中的东西都扩展出来了．
            所以下面  list: [...this.state.list, this.state.inputValue]这句话就相当于：
              list: ["基础按摩", "精油推背", this.state.inputValue]，所以此时里面有３个数．
            ５.然后运行项目，在input中写如数据，然后点击＂增加服务＂按钮，你会发现虽然功能是实现了，但是控制台有一个警告：
            Warning:Each child in a list shoul have a unique "key" prop

            * 这个错误的大概意思就是缺少key值。就是在用map循环时，需要设置一个不同的值，这个时React的要求。我们可以暂时用index+item的形式来实现,如上：
            {this.state.list.map((item, index) => {
                return <li key={index + item}>{item}</li>;
             })}

        */
      list: [...this.state.list, this.state.inputValue],
      //   inputValue:''是为了：每次添加完数据之后,input为空，里面没有数据
      inputValue: "",
    });
  }
}
export default Xiaojiejie;
