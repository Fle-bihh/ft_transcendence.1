import { userActionType } from "../Action-Types";
import { userAction } from "../Actions";

export interface User {
    user: {
        login: string
    } | null;
}

export const initialState: User = {
    user: null
}

export const userReducer = (state: User = initialState, action: userAction) => {
    switch (action.type) {
        case userActionType.SETUSER: {
            return {
                ...state,
                user: action.payload
            };
        }
        default:
            return state;
    }
}