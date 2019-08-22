import React from 'react';
import './styles/main.scss';
import {clearNotifications, NotificationWidgetContainer, NotiPositions, NotiTypes, showNotification} from "./exporter";

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
                <button onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tl)}>add tl alert</button>
                <button onClick={event=> this._addNotification(NotiTypes.warning, NotiPositions.bl)}>add bl warning</button>
                <button onClick={event=> this._addNotification(NotiTypes.info, NotiPositions.br)}>add br info</button>
                <button onClick={event=> this._addNotification(NotiTypes.alert, NotiPositions.tr)}>add tr alert</button>
                <button onClick={event=> this._clearNotifications()}>clear</button>
                <NotificationWidgetContainer
                    autoHideTime={5000}
                />
            </div>
        )
    }
}


export default App;
