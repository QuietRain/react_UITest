import * as React from 'react'
import * as ReactDOM from 'react-dom';

import { HelloMessage } from './HelloWorld'
import { NotesList } from './Children'
import { MyComponent } from './ClickTrueDom'
import { MyTitle } from './PropTypes'
import { LikeButton } from './State'
import { Input } from './TextFieldForm'
import { Timefade } from './LifeTime'
import { DataTime } from './DataTime'

var tit = 123;
var arr = [//数组显示
  <h1 > Hello world!</h1>,
  <h2>React is awesome</h2>,

  <HelloMessage name="React" />,//component显示

  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,                   //所有子节点显示

  <MyComponent />,                 //获取真实的DOM节点


  <MyTitle title={tit} />,            //设置title类型 
  <LikeButton />,           //设置状态State
  <Input />,
  <Timefade />,
  <br />, <br />,
  <DataTime name='张全蛋' time={new Date()} />

];

ReactDOM.render(<div>{arr}</div>, document.getElementById('root1'));
