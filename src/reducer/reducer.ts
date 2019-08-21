import { useReducer } from 'react';
import {WidgetPositions, notiTypes} from "../enums/NotificationProps";
//
interface stateMap {[s: string]: any;}
interface actionMap {type: string;
message?: string; position?: WidgetPositions; notiType?: notiTypes; notificationId?:string;
}
// function reducer(state:stateMap, action:actionMap) {
//     switch (action.type) {
//         case 'SHOW':
//             return { value: state.value + 1 };
//         case 'CLEAR':
//             return { value: state.value - 1 };
//         default:
//             return state;
//     }
// }
//
//
// const [state, dispatch] = useReducer(reducer, { value: 0 });
// const showNotification = (message:string,  type:notiTypes, position:WidgetPositions) => {
//     dispatch({ type: 'SHOW' , message, position, notiType:type})
// };
//
// const removeNotification = (notificationId:string  ) => {
//     dispatch({ type: 'REMOVE' , notificationId})
// };
//
// const clearNotification = () => {
//     dispatch({type: 'CLEAR'})
// };
//
//

const useRe = () => {
    function reducer(state:stateMap, action:actionMap) {
        switch (action.type) {
            case 'SHOW':
                return { value: state.value + 1 };
            case 'CLEAR':
                return { value: state.value - 1 };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { value: 0 });
    const showNotification = (message:string,  type:notiTypes, position:WidgetPositions) => {
        dispatch({ type: 'SHOW' , message, position, notiType:type})
    };

    const removeNotification = (notificationId:string  ) => {
        dispatch({ type: 'REMOVE' , notificationId})
    };

    const clearNotification = () => {
        dispatch({type: 'CLEAR'})
    };

    return {
        state,
        dispatch,
    }
};