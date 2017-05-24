import * as React from 'react'
import * as ReactDOM from 'react-dom';
export class LikeButton extends React.Component<any, any>{
  constructor() {
    super();
    this.state = {
      liked: true,
      number: 0

    }
  }
  handleClick(evnet) {
    this.setState({
      liked: !this.state.liked,
      number: this.state.number + 1
    });
  };
  render() {
    var text = this.state.liked ? 'true' : 'flase';
    var num = this.state.number;
    return (
      <p onClick={this.handleClick.bind(this)}>
        现在的状态是{text}，当前数字为{num}
      </p>
    );
  }
};