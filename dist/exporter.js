"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationWidgetContainer_1 = __importDefault(require("./components/NotificationWidgetContainer"));
exports.NotificationWidgetContainer = NotificationWidgetContainer_1.default;
var eventManager_1 = __importDefault(require("./utils/eventManager"));
var NotificationProps_1 = require("./enums/NotificationProps");
exports.NotiTypes = NotificationProps_1.NotiTypes;
exports.NotiPositions = NotificationProps_1.NotiPositions;
var EventTypes_1 = require("./enums/EventTypes");
function showNotification(message, notiType, positions) {
    eventManager_1.default.emit(EventTypes_1.EventTypes.add, message, notiType, positions);
}
exports.showNotification = showNotification;
function clearNotifications() {
    eventManager_1.default.emit(EventTypes_1.EventTypes.clear);
}
exports.clearNotifications = clearNotifications;
