"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Timefade = (function (_super) {
    __extends(Timefade, _super);
    function Timefade() {
        var _this = _super.call(this) || this;
        _this.state = {
            opacity: 1.0,
            alive: true
        };
        return _this;
    }
    ;
    Timefade.prototype.componentDidMount = function () {
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
    ;
    Timefade.prototype.handleClick = function () {
        this.setState({
            opacity: this.state.opacity,
            alive: !this.state.alive
        });
    };
    Timefade.prototype.render = function () {
        var alive = this.state.alive ? 'ture' : 'false';
        var opacity = this.state.opacity;
        return (React.createElement("div", { style: { opacity: this.state.opacity } },
            React.createElement("p", { onClick: this.handleClick.bind(this) },
                "\u989C\u8272\u968F\u65F6\u95F4\u53D8\u5316 ",
                this.props.name,
                alive,
                ",\u5F53\u524D\u900F\u660E\u5EA6\u4E3A",
                opacity)));
    };
    return Timefade;
}(React.Component));
exports.Timefade = Timefade;
