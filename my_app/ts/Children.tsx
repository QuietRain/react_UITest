import * as React from 'react'
import * as ReactDOM from 'react-dom';
export class NotesList extends React.Component<any, any>{
  render() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
          })
        }
      </ol>
    );
  }
};