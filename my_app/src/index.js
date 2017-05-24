"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var HelloWorld_1 = require("./HelloWorld");
var Children_1 = require("./Children");
var ClickTrueDom_1 = require("./ClickTrueDom");
var PropTypes_1 = require("./PropTypes");
var State_1 = require("./State");
var TextFieldForm_1 = require("./TextFieldForm");
var LifeTime_1 = require("./LifeTime");
var DataTime_1 = require("./DataTime");
var tit = 123;
var arr = [
    React.createElement("h1", null, " Hello world!"),
    React.createElement("h2", null, "React is awesome"),
    React.createElement(HelloWorld_1.HelloMessage, { name: "React" }),
    React.createElement(Children_1.NotesList, null,
        React.createElement("span", null, "hello"),
        React.createElement("span", null, "world")),
    React.createElement(ClickTrueDom_1.MyComponent, null),
    React.createElement(PropTypes_1.MyTitle, { title: tit }),
    React.createElement(State_1.LikeButton, null),
    React.createElement(TextFieldForm_1.Input, null),
    React.createElement(LifeTime_1.Timefade, null),
    React.createElement("br", null), React.createElement("br", null),
    React.createElement(DataTime_1.DataTime, { name: '张全蛋', time: new Date() })
];
ReactDOM.render(React.createElement("div", null, arr), document.getElementById('root1'));
