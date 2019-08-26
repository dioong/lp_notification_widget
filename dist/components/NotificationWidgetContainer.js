var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import Notification from "./Notification";
import _ from "lodash";
import '../styles/scss/notificationWidget.scss';
import uuidv1 from "uuid";
import eventManager from "../utils/eventManager";
import { EventTypes } from "../enums/EventTypes";
var NotificationWidgetContainer = /** @class */ (function (_super) {
    __extends(NotificationWidgetContainer, _super);
    function NotificationWidgetContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultAutoHideTime = 3000;
        _this._timeCheckId = null;
        _this.state = {
            notifications: []
        };
        _this._check_time = function () {
            var outDatedNotificationUuids = _(_this.state.notifications).filter(function (v, i) {
                return v["created"] < Date.now() - (_this.props.autoHideTime || _this.defaultAutoHideTime);
            }).map("uuid").value();
            if (!_.isEmpty((outDatedNotificationUuids))) {
                _this.setState(__assign({}, _this.state, { notifications: _.filter(_this.state.notifications, function (v, i) {
                        return !_.includes(outDatedNotificationUuids, v["uuid"]);
                    }) }));
            }
            _this._runTimer();
        };
        _this._runTimer = function () {
            if (_this._timeCheckId != null)
                clearTimeout(_this._timeCheckId);
            _this._timeCheckId = setTimeout(_this._check_time, 300);
        };
        _this._onDelete = function (uuid) {
            _this.setState({
                notifications: _.filter(_this.state.notifications, function (v, i) {
                    return v["uuid"] !== uuid;
                })
            });
        };
        _this.renderNotification = function () {
            var notificationToRender = {};
            _this.state.notifications.forEach(function (notification) {
                var position = notification.position, notiType = notification.notiType, message = notification.message, uuid = notification.uuid;
                notificationToRender[position] || (notificationToRender[position] = []);
                notificationToRender[position].push(React.createElement(Notification, { uuid: uuid, key: uuid, message: message, notiType: notiType, onClickDelete: _this._onDelete }));
            });
            return _.keys(notificationToRender).map(function (position) {
                return (React.createElement("div", { className: "lp-notification-container " + position, key: position }, notificationToRender[position]));
            });
        };
        return _this;
    }
    NotificationWidgetContainer.prototype.componentDidMount = function () {
        var _this = this;
        eventManager.on(EventTypes.add, function (message, notiType, position) {
            _this.setState(__assign({}, _this.state, { notifications: _this.state.notifications.concat([
                    { message: message, notiType: notiType, position: position, uuid: uuidv1(), created: Date.now() }
                ]) }));
        })
            .on(EventTypes.clear, function () {
            _this.setState(__assign({}, _this.state, { notifications: [] }));
        });
    };
    NotificationWidgetContainer.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (_.isEmpty(this.state.notifications)) {
            return;
        }
        this._runTimer();
    };
    NotificationWidgetContainer.prototype.componentWillUnmount = function () {
        if (this._timeCheckId != null) {
            clearTimeout(this._timeCheckId);
        }
        eventManager.off(EventTypes.clear).off(EventTypes.add);
    };
    NotificationWidgetContainer.prototype.render = function () {
        return React.createElement("div", null, this.renderNotification());
    };
    return NotificationWidgetContainer;
}(React.Component));
export default NotificationWidgetContainer;
