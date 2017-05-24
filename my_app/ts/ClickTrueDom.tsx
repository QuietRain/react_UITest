import * as React from 'react'
import * as ReactDOM from 'react-dom';
export class MyComponent extends React.Component<any, any>{
  handleClick() {
    console.log(this.refs["myTextInput"]);
  }
  render() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
};