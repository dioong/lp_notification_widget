import * as React from "react";
import '../styles/scss/notification.scss';
var Notification = function (props) {
    return React.createElement("div", { className: "lp-notification " + props.notiType },
        React.createElement("div", { className: "lp-message" }, props.message),
        React.createElement("button", { className: 'lp-close-btn', onClick: function (e) { return props.onClickDelete(props.uuid); } }, "\u2716"));
};
export default Notification;
