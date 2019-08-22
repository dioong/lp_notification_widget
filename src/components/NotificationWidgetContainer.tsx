import * as React from "react";
import Notification from "./Notification";
import _ from "lodash"
import {notiTypes, WidgetPositions} from "../enums/NotificationProps";
import uuidv1 from "uuid";
import eventManager from "../utils/eventManager";

interface NotificationScheme {
    message:string, notiType:notiTypes, position: WidgetPositions, uuid: string, created: number
}

interface NotificationWidgetState {
    notifications: Array<NotificationScheme>
}

interface NotificationWidgetProps {
    autoHideTime?: number
}

class NotificationWidgetContainer extends React.Component<NotificationWidgetProps, NotificationWidgetState> {
    defaultAutoHideTime:number = 3000;
    _timeCheckId:any = null;
    state = {
        notifications: []
    };

    componentDidMount(): void {
        eventManager.on("ADD", (message:string, notiType:notiTypes, position:WidgetPositions) => {
            this.setState({
                ...this.state,
                notifications: [
                    ...this.state.notifications,
                    {message:message, notiType:notiType, position:position, uuid: uuidv1(), created: Date.now()}
                ]
            })})
            .on("CLEAR", () => {
                this.setState({
                    ...this.state,
                    notifications: []
                })})
    }

    componentDidUpdate(prevProps: Readonly<NotificationWidgetProps>, prevState: Readonly<NotificationWidgetState>, snapshot?: any): void {
        if (_.isEmpty(this.state.notifications)) return;

        this._runTimer()
    }

    _check_time = () => {
        const outDatedNotificationUuids = _(this.state.notifications).filter((v, i) => {
            return v["created"] < Date.now() - (this.props.autoHideTime || this.defaultAutoHideTime)
        }).map("uuid").value();

        if (!_.isEmpty((outDatedNotificationUuids))) {
            this.setState({
                ...this.state,
                notifications: _.filter(this.state.notifications, (v, i) => {
                    return !_.includes(outDatedNotificationUuids, v["uuid"])
                })
            })
        }

        this._runTimer()
    };

    _runTimer = () =>{
        if (this._timeCheckId != null) clearTimeout(this._timeCheckId);
        this._timeCheckId = setTimeout(this._check_time, 300)
    };


    _onDelete = (uuid:string) => {
        this.setState({
            notifications: _.filter(this.state.notifications, (v, i) => {
                return v["uuid"] !== uuid;
            })
        })
    };

    renderNotification = () => {
        interface stateMap {[s: string]: Array<any>;}
        const notificationToRender:stateMap = {};

        this.state.notifications.forEach(notification => {
            const { position, notiType, message, uuid } = notification;
            notificationToRender[position] || (notificationToRender[position] = []);
            notificationToRender[position].push(
                <Notification
                    uuid={uuid}
                    key={uuid}
                    message={message}
                    notiType={notiType}
                    onClickDelete={this._onDelete}
                />
            );
        });

        return _.keys(notificationToRender).map(position => {
            return (
                <div className={`notification-container ${position}`} key={position}>
                    {notificationToRender[position]}
                </div>
            );
        })
    }

    render() {
        return <div>{this.renderNotification()}</div>
    }
}

export default NotificationWidgetContainer;