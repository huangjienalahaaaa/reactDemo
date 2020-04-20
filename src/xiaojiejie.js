import React, { Component, Fragment } from "react";
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
              <li
                key={index + item}
                onClick={this.deleteItem.bind(this, index)}
              >
                {item}
              </li>
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
  //删除单项服务
  deleteItem(index) {
    /*
    1.arrayObject.splice():
    * splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
    * 如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
    

    2.其实这里边是有一个坑的,有的小伙伴肯定会认为下面的代码也是正确的.
    //删除单项服务
      deleteItem(index){
          this.state.list.splice(index,1)
          this.setState({
              list:this.state.list
          }) 
      }
      ->记住React是禁止直接操作state的,虽然上面的方法也管用,但是在后期的性能优化上会有很多麻烦,所以一定不要这样操作.这也算是我React初期踩的比较深的一个坑,希望小伙伴们可以跳坑.

    */
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
export default Xiaojiejie;
