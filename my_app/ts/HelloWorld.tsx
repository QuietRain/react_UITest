import * as React from 'react'
import * as ReactDOM from 'react-dom';
interface HelloWorldProps {  
  name: string;  
} 
  
export class HelloMessage extends React.Component<HelloWorldProps, any> {  
  render() {  
    return <div>Hello {this.props.name}</div>;  
  }
}  
  
// ReactDOM.render(<HelloMessage name="React" />, document.getElementById('root2'));