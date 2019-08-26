import React from 'react';
import './styles/main.scss';
import {NotificationWidget, NotiPositions, NotiTypes} from "./exporter";

class App extends React.Component {
    notificationWidget: NotificationWidget | undefined;

    componentDidMount(): void {
        this.notificationWidget = new NotificationWidget(5000)
    }

    private _addNotification = (notiType:NotiTypes, position:NotiPositions) => {
        const message:string|null = prompt("insert notification message");
        if (this.notificationWidget) {
            this.notificationWidget.showNotification(message || "", notiType, position)
        }

    };
    private _clearNotifications = () => {
        if (this.notificationWidget) {
            this.notificationWidget.clearNotifications()
        }
    };

    public render() {
        return (
            <div className={"menu"}>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tl)}>Top Left alert</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tr)}>Top Right alert</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.warning, NotiPositions.bl)}>Bottom Left warning</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.info, NotiPositions.br)}>Bottom Right info</button>
                <button className={"menu-button"} onClick={event=> this._clearNotifications()}>clear</button>
            </div>
        )
    }
}


export default App;
