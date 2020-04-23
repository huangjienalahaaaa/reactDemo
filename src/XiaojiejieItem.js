import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
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
