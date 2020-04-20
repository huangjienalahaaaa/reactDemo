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
