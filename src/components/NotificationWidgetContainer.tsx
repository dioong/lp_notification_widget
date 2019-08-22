import * as React from "react";
import Notification from "./Notification";
import _ from "lodash"
import '../styles/scss/notificationWidget.scss';

import {NotiPositions, NotiTypes} from "../enums/NotificationProps";
import uuidv1 from "uuid";
import eventManager from "../utils/eventManager";
import {EventTypes} from "../enums/EventTypes";

interface InotificationScheme {
    message:string, notiType:NotiTypes, position: NotiPositions, uuid: string, created: number
}

interface InotificationWidgetState {
    notifications: Array<InotificationScheme>
}

interface InotificationWidgetProps {
    autoHideTime?: number
}

interface IlistMap {[s: string]: Array<any>;}

class NotificationWidgetContainer extends React.Component<InotificationWidgetProps, InotificationWidgetState> {
    defaultAutoHideTime:number = 3000;
    _timeCheckId:any = null;
    state = {
        notifications: []
    };

    public componentDidMount(): void {
        eventManager.on(EventTypes.add, (message:string, notiType:NotiTypes, position:NotiPositions) => {
            this.setState({
                ...this.state,
                notifications: [
                    ...this.state.notifications,
                    {message, notiType, position, uuid: uuidv1(), created: Date.now()}
                ]
            })})
            .on(EventTypes.clear, () => {
                this.setState({
                    ...this.state,
                    notifications: []
                })})
    }

    public componentDidUpdate(prevProps: Readonly<InotificationWidgetProps>, prevState: Readonly<InotificationWidgetState>, snapshot?: any): void {
        if (_.isEmpty(this.state.notifications)) {
            return;
        }

        this._runTimer()
    }

    public componentWillUnmount(): void {
        if (this._timeCheckId != null) {
            clearTimeout(this._timeCheckId);
        }
        eventManager.off(EventTypes.clear).off(EventTypes.add)
    }

    private _check_time = () => {
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
        const notificationToRender:IlistMap = {};

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
                <div className={`lp-notification-container ${position}`} key={position}>
                    {notificationToRender[position]}
                </div>
            );
        })
    };

    render() {
        return <div>{this.renderNotification()}</div>
    }
}

export default NotificationWidgetContainer;