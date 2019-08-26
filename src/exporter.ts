import NotificationWidgetContainer from './components/NotificationWidgetContainer';
import eventManager from './utils/eventManager';
import { NotiTypes, NotiPositions } from './enums/NotificationProps';
import { EventTypes } from './enums/EventTypes';
import ReactDOM from 'react-dom';
import * as React from "react";


class NotificationWidget {
  _autoHideTime: number;
  public constructor(autoHideTime: number) {
    this._autoHideTime = autoHideTime || 3000

    const id = "lp-notification_widget_container";
    let containerDomNode = document.getElementById(id)
    if (!containerDomNode) {
      const containerDomNode = document.createElement('div');
      containerDomNode.setAttribute("id", id);
      document.body.appendChild(containerDomNode);
      ReactDOM.render(React.createElement(NotificationWidgetContainer, {autoHideTime}), containerDomNode);
    }
  }

  public showNotification(message: string, notiType: NotiTypes, positions: NotiPositions) {
    eventManager.emit(EventTypes.add, message, notiType, positions);
  }

  public clearNotifications() {
    eventManager.emit(EventTypes.clear);
  }
}

export {NotificationWidget, NotiPositions, NotiTypes };
