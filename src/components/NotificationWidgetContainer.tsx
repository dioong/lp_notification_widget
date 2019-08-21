import * as React from "react";
import Notification from "./Notification";
import _ from "lodash"
interface NotificationWidgetProps {
    notifications: any[];
    onDelete: Function;
}

class NotificationWidgetContainer extends React.Component<NotificationWidgetProps> {
    onDelete = (uuid:string) => {
        this.props.onDelete(uuid)
    };
    renderNotification = () => {
        interface stateMap {[s: string]: Array<any>;}
        const notificationToRender:stateMap = {};

        this.props.notifications.forEach(notification => {
            const { position, notiType, message, uuid } = notification;
            notificationToRender[position] || (notificationToRender[position] = []);
            notificationToRender[position].push(
               <Notification
                   uuid={uuid}
                   key={uuid}
                   message={message}
                   notiType={notiType}
                   onClickDelete={this.onDelete}
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