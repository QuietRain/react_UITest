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
var LikeButton = (function (_super) {
    __extends(LikeButton, _super);
    function LikeButton() {
        var _this = _super.call(this) || this;
        _this.state = {
            liked: true,
            number: 0
        };
        return _this;
    }
    LikeButton.prototype.handleClick = function (evnet) {
        this.setState({
            liked: !this.state.liked,
            number: this.state.number + 1
        });
    };
    ;
    LikeButton.prototype.render = function () {
        var text = this.state.liked ? 'true' : 'flase';
        var num = this.state.number;
        return (React.createElement("p", { onClick: this.handleClick.bind(this) },
            "\u73B0\u5728\u7684\u72B6\u6001\u662F",
            text,
            "\uFF0C\u5F53\u524D\u6570\u5B57\u4E3A",
            num));
    };
    return LikeButton;
}(React.Component));
exports.LikeButton = LikeButton;
;
