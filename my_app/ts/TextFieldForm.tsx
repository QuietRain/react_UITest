import * as React from 'react'
import * as ReactDOM from 'react-dom'

export class Input extends React.Component<any, any>{


    constructor() {
        super();
        this.state = {
            value: 'Hello!可以在这里输出字符串！'
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    };
    render() {
        var value = this.state.value;
        return (
            <div>
                <input value={value} onChange={this.handleChange.bind(this)} />
                <p> {value}</p>
            </div>
        );
    }
};