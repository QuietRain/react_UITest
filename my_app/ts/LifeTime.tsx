import * as React from 'react'
export class Timefade extends React.Component<any, any>{
    constructor() {
        super()
        this.state = {
            opacity: 1.0,
            alive: true

        }
    };

    componentDidMount() {
        setInterval(function () {
            if (this.state.alive === true) {
                var opacity = this.state.opacity;
                opacity -= 0.05;
                if (opacity < 0.1) {
                    opacity = 1.0;
                }
                this.setState({
                    opacity: opacity
                });
            }
        }.bind(this), 100);
    };

    handleClick() {
        this.setState({
            opacity: this.state.opacity,
            alive: !this.state.alive
        })
    }

    render() {
        let alive = this.state.alive ? 'ture' : 'false';
        let opacity = this.state.opacity;
        return (
            <div style={{ opacity: this.state.opacity }}>
                <p onClick={this.handleClick.bind(this)}>
                    颜色随时间变化 {this.props.name}{alive},当前透明度为{opacity}
                </p>
            </div>
        );
    }
}