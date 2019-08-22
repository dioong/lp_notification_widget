import React from 'react';
import './styles/main.scss';
import {NotificationWidgetContainer, NotiPositions, NotiTypes, showNotification, clearNotifications} from "./exporter";

class App extends React.Component {
    private _addNotification = (notiType:NotiTypes, position:NotiPositions) => {
        const message:string|null = prompt("insert notification message");
        showNotification(message || "", notiType, position)
    };
    private _clearNotifications = () => {
        clearNotifications()
    };

    public render() {
        return (
            <div className={"menu"}>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tl)}>Top Left alert</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tr)}>Top Right alert</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.warning, NotiPositions.bl)}>Bottom Left warning</button>
                <button className={"menu-button"} onClick={event=> this._addNotification(NotiTypes.info, NotiPositions.br)}>Bottom Right info</button>
                <button className={"menu-button"} onClick={event=> this._clearNotifications()}>clear</button>
                <NotificationWidgetContainer
                    autoHideTime={5000}
                />
            </div>
        )
    }
}


export default App;
