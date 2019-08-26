"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("../styles/scss/notification.scss");
var Notification = function (props) {
    return React.createElement("div", { className: "lp-notification " + props.notiType },
        React.createElement("div", { className: "lp-message" }, props.message),
        React.createElement("button", { className: 'lp-close-btn', onClick: function (e) { return props.onClickDelete(props.uuid); } }, "\u2716"));
};
exports.default = Notification;
