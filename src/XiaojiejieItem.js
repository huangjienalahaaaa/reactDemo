import React, { Component } from "react";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props); //固定写法
    // 5．在constructor中进行this的绑定
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    {
      /* ２．接受父组件传递过来的数据->props，如下代码:
      
         3.子组件向父组件传值：
            * React中有明确规定，子组件不允许直接向父组件传值．
            *所以应该如何去做？这里是要点击一个item就相处相应的item.所以使用的方法是：删除函数在父组件中定义，然后父组件将这个事件传递过来，然后子组件调用这个方法．就Ｏｋ了～！
       
      */
    }
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
  handleClick() {
    /*
        ４．这里运行，点击每一个item会发现会有报错，也是之前的this指向报错，所以这个时候怎么去修改?
        * 1. 上面的li中的onClick事件加上.bind(this):
          return <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>;
        * 2. 使用构造函数的方法，就是在constructor里进行一个绑定．且注意一个点：如果是在constructor里进行绑定，会对之后的性能优化有一个很好的作用，比第一种方法要好的多．
      */
    console.log(this.props.index);

    // ６．子组件调用父组件的事件，调用删除事件
    this.props.deleteItem(this.props.index);
  }
}

export default XiaojiejieItem;
