import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  /*
      ２．使用shouldComponentUpdate来解决频繁渲染问题
    */
  // shouldComponentUpdate() {
  //   //return false=>这个时候在input框中写入东西并且按按钮可以新增，也可以阻止频繁渲染问题．但是如果是修改里面的数据的话，就会报错，所以不能使用这个方法．所以得用下面shouldComponentUpdate方法（带有nextProps,nextState参数）
  //   return false;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps，nextState->表示将要变化的属性，状态
    if (nextProps.content !== this.props.content) {
      //如果传递过来的content有改变，就发生渲染
      return true;
    } else {
      //如果传递过来的content没有发生变化，就不渲染
      return false;
    }
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
XiaojiejieItem.defaultProps = {
  content: "松岛枫",
};
export default XiaojiejieItem;
