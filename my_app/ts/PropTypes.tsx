import * as React from 'react'
import * as ReactDOM from 'react-dom';
export class MyTitle extends React.Component<any,any>{
  // getDefaultProps: function () {
  //   return {
  //     title: 'Hello World'
  //   }
  // },
  propTypes={//设置title类型

    title: React.PropTypes.string.isRequired,

  };

  render () {
    return <h1> {this.props.title} </h1>;
  }
};