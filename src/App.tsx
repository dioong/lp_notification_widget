import React from 'react';
import './styles/main.scss';
import {WidgetPositions, notiTypes, NotificationWidgetContainer, showNotification, clearNotifications} from "./exporter";

class App extends React.Component {
    state: {
        notifications: []
    };

    constructor({props}: { props: any }) {
        super(props);

        // Set the state directly. Use props if necessary.
        this.state = {
            notifications: [],
        }
    }
    _addNotification = (position:WidgetPositions) => {
        showNotification("test", notiTypes.alert, position)
    };
    _clearNotifications = () => {
        clearNotifications()
    };

    render() {
        return (
            <div>
                <button onClick={event=> this._addNotification(WidgetPositions.tl)}>add tl</button>
                <button onClick={event=> this._addNotification(WidgetPositions.bl)}>add bl</button>
                <button onClick={event=> this._addNotification(WidgetPositions.br)}>add br</button>
                <button onClick={event=> this._addNotification(WidgetPositions.tr)}>add tr</button>
                <button onClick={event=> this._clearNotifications()}>clear</button>
                <NotificationWidgetContainer
                    autoHideTime={3000}
                />
            </div>
        )
    }
}


export default App;
