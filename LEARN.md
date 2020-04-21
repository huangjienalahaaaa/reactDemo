# v1.0 HelloWorld 和组件的讲解

# v1.1 React 中 JSX 语法简介:

> JSX 就是 Javascript 和 XML 结合的一种格式。React 发明了 JSX，可以方便的利用 HTML 语法来创建虚拟 DOM，当遇到<，JSX 就当作 HTML 解析，遇到{就当 JavaScript 解析.

# v1.2 React 实例-小姐姐服务菜单:

1. Fragment 标签讲解:

加上最外层的 DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作 Flex 布局的时候,外层还真的不能有包裹元素。这种矛盾其实 React16 已经有所考虑了，为我们准备了<Fragment>标签。

- 要想使用<Fragment>，需要先进行引入:
  import React,{Component,Fragment } from 'react'

* 然后把最外层的<div>标签，换成<Fragment>标签。

- 这时候你再去浏览器的 Elements 中查看，就回发现已经没有外层的包裹了。

# v1.3 React 实例-宝剑磨的好,理论不能少:

> 这节课我们主要了解一下 React 中的响应式设计原理和数据的绑定方法，俗话说的好："宝剑磨的好，理论不能少"。这节课我们不仅要编写效果，还要讲理论，这节课很重要，因为这涉及 React 中的设计思想和你以后的编程思路。

1. 响应式设计和数据的绑定:

   React 不建议你直接操作 DOM 元素,而是要通过数据进行驱动，改变界面中的效果。React 会根据数据的变化，自动的帮助你完成界面的改变。所以在写 React 代码时，你无需关注 DOM 相关的操作，只需要关注数据的操作就可以了（这也是 React 如此受欢迎的主要原因，大大加快了我们的开发速度）。

2. 绑定事件:

# v1.4 React 实例-老板我要加个钟:

> 有了上节课的基础，这节课终于可以添加服务，为所欲为了，随意增加你想要的服务了。这节课我们就来增加一个躺式采耳服务，体验一把帝王级待遇。

# v1.5 React 实例-宝剑虽然好 老腰受不了:

> 添加服务虽然很美妙，但是有时候也需要有些节制。这节课就学习如何删除一个服务选项。需求是这样的，当点击已经有的选项后，我们就进行删除。如果使用原生的 js 来写，这是非常麻烦的，但是有了 React 后就变的简单了。

# v1.6 React 进阶-JSX 防踩坑的几个地方:

> 这节课就讲一下 JSX 语法中需要注意的几个小坑:

**_1.JSX 代码注释:_**
JSX 中的代码注释是非常有讲究的，这个书上介绍的也非常少，所以在这里讲一下，因为技术胖在初学 React 在这里踩过坑。
我第一次写 JSX 注释，是直接这样写的，当然这样写是完全不对的。

```javascript
<Fragment>
  //第一次写注释，这个是错误的
  <div>
    <input
      value={this.state.inputValue}
      onChange={this.inputChange.bind(this)}
    />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
  </div>
```

那写 JSX 的注释，可以有下面两种写法:

```javascript
<Fragment>
    {/* 正确注释的写法 */}
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```

如果你记不住，有个简单的方法，就是用 VSCode 的快捷键，直接按 Ctrl+/，就会自动生成正确的注释了。
你可以把这个理解为，在 jsx 中写 javascript 代码。所以外出我们套入了{}，然后里边就是一个多行的 javascript 注释。如果你要使用单行祝注释//，你需要把代码写成下面这样。

```javascript
<Fragment>
    {
        //正确注释的写法
    }
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```

也就是你要进行换行，所以个人认为这种方法不太优雅，所以推荐第一种注释方法。

**_2.JSX 中的 class 陷阱:_**
比如要给朴素单纯的界面，加入黄色成分，让我们的文本框又粗又黄。我们先来错误演示。

第一步：先写一个 CSS 样式文件，在 src 目录下，新建一个 style.css 的样式文件。

> .input {border:3px solid #ae7000}

第二步：在 Xiaojiejie.js 里引入，先用 import 进行引入,能用 import 引入，都是 webpack 的功劳。

> import './style.css'

第三部：给 JSX 加入`class,注意下面的代码是错误的。

> <input class="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />

虽然现在页面是可以正常显示结果的，但是你代开浏览器控制台会发现 Warning 警告。

```javascript
index.js:1437 Warning: Invalid DOM property `class`. Did you mean `className`?
    in input (at Xiaojiejie.js:19)
    in div (at Xiaojiejie.js:18)
    in Xiaojiejie (at src/index.js:5)
```

意思就是要把 class 换成 className，它是防止和 js 中的 class 类名 冲突，所以要求换掉。这也算是一个小坑吧。

**_3.JSX 中的 html 解析问题：_**

如果想在文本框里输入一个\<h1\>标签，并进行渲染。默认是不会生效的，只会把\<h1\>标签打印到页面上，这并不是我想要的。如果工作中有这种需求，可以使用 <font color="red">dangerouslySetInnerHTML</font> 属性解决。具体代码如下：

```javascript
<ul>
  {this.state.list.map((item, index) => {
    return (
      <li
        key={index + item}
        onClick={this.deleteItem.bind(this, index)}
        dangerouslySetInnerHTML={{ __html: item }}
      ></li>
    );
  })}
</ul>
```

**_4.JSX 中 \<label> 解析问题：_**

JSX 中<label>的坑，也算是比较大的一个坑，label 是 html 中的一个辅助标签，也是非常有用的一个标签。

先看下面的代码，我们在文本框前面加入一个<label>。

```javascript
<div>
  <label>加入服务：</label>
  <input
    className="input"
    value={this.state.inputValue}
    onChange={this.inputChange.bind(this)}
  />
  <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候想点击“加入服务”直接可以激活文本框，方便输入。按照 html 的原思想，是直接加 ID 就可以了。代码如下：

```javascript
<div>
  <label for="jspang">加入服务：</label>
  <input
    id="jspang"
    className="input"
    value={this.state.inputValue}
    onChange={this.inputChange.bind(this)}
  />
  <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候你浏览效果虽然可以正常，但 console 里还是有红色警告提示的。大概意思是不能使用 for.它容易和 javascript 里的 for 循环混淆，会提示你使用 htmlfor。

```javascript
<div>
  <label htmlFor="jspang">加入服务：</label>
  <input
    id="jspang"
    className="input"
    value={this.state.inputValue}
    onChange={this.inputChange.bind(this)}
  />
  <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候代码就正确了，可以实现点击<label>后,激活<input>标签了。
这节算是我总结的一些 JSX 中的坑吧，总结出来，希望小伙伴们少踩这些坑，能快速上手 React

# v1.7 React 进阶-JSX 防踩坑的几个地方:

> 这节课很短，但是我觉的有必要单独拿出一节来讲讲。在工作中你经常会看到程序老司机写代码是非常快的，甚至让你烟花缭乱，那他们真的是单身那么多年，练就了超级快手吗?当然不是，只是他们使用了快速生成插件，这节课我就向大家介绍一个 vscode 中的 Simple React Snippets，有了这个插件，稍加练习，你也可以像老司机一样，拥有加藤鹰的圣手(如果不懂请自行搜索吧)。

- vscode 中的 Simple React Snippets:

**_1．快速进行引入 import:_**

> 直接在 vscode 中输入 imrc，就会快速生成最常用的 import 代码:
> import React, { Component } from 'react';

**_２．快速生产 class:_**

> 在作组件的时候，都需要写一个固定的基本格式，这时候你就可以使用快捷键 cc.插件就会快速帮我们生成如下代码：

```javascript

class  extends Component {
    state = {  }
    render() {
        return (  );
    }
}

export default ;

```
