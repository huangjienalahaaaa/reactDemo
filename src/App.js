import React from "react";
const Component = React.Component;

class App extends Component {
  render() {
    return (
      //class的定义在react中是用className
      <ul className="my-list">
        {/* 三元运算符 */}
        <li>{false ? "JSPang.com" : "技术胖"}</li>
        <li>I love React</li>
      </ul>
    );
  }
}

export default App;
