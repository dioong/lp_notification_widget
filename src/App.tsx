import React from 'react';
import uuidv1 from "uuid";
import './styles/main.scss';
import {WidgetPositions, notiTypes} from "./enums/NotificationProps";
import NotificationWidgetContainer from "./components/NotificationWidgetContainer"
import _ from "lodash"

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
        this.setState({notifications:[
                ...this.state.notifications,
                {message:"test", notiType:notiTypes.alert, position, uuid: uuidv1()}
            ]
        })
    };
    _clearNotifications = () => {
        this.setState({notifications:[]})
    };
    _onDelete = (uuid:string) => {
        this.setState({
            notifications: _.filter(this.state.notifications, (v, i) => {
                return v["uuid"] !== uuid;
            })
        })
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
                    notifications={this.state.notifications}
                    onDelete={this._onDelete}
                />
            </div>
        )
    }
}


export default App;
