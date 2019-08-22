# lk notification widget task

## Installation
Install dependencies using yarn

````
yarn install
````

After that, command it to run sample

````
yarn start
````

## Usage
1. Add `"lokal_notification_widget": "git+https://github.com/dioong/lp_notification_widget.git"` to dependencies in package.json
2. `npm install`  or `yarn install`
3. `npm update lokal_notification_widget` or `yarn upgrade lokal_notification_widget` when repository has been updated
4. use in your application.

clearNotifications, NotificationWidgetContainer, NotiPositions, NotiTypes, showNotification
- NotificationWidgetContainer
    ```javascript
    import {NotificationWidgetContainer} from "lokal_notification_widget";
    /**
        you can refer propTypes below
    */
    propTypes = {
        autoHideTime: number        //time to autohide notification, unit is millisecond
    };

    <NotificationWidgetContainer
        autoHideTime={5000}
        />
    ```

- usable function
    ```javascript
    import {NotiPositions, NotiTypes, showNotification, clearNotifications} from "lokal_notification_widget";
    /**
        when you want showNotification,
    */
    showNotification(message:string || "", notiType:NotiTypes, position:NotiPositions)

    /**
        when you want showNotification,
    */
    clearNotifications()
    ```

## Technology stack
#### React
[React](https://github.com/facebook/react)

#### TypeScript
[Konvajs](https://konvajs.github.io/)

#### Lodash
[Lodash](https://lodash.com/)

#### Branching
Git-flow strategy. Detail information [here](http://nvie.com/posts/a-successful-git-branching-model/).