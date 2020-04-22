import React, { Component } from "react";
// 1.在使用需要先引入PropTypes
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

/* 2.引入后，就可以在组件的下方进行引用了，需要注意的是子组件的最下面（不是类里边）
 * 如果要求这个参数是必传的该怎么办？
  -> avname:PropTypes.string.isRequired
 */
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
/* 3.使用默认值defaultProps */
XiaojiejieItem.defaultProps = {
  content: "松岛枫",
};
export default XiaojiejieItem;
