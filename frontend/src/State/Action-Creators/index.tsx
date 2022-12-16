import { Dispatch } from "redux"
import { userActionType } from "../Action-Types/index"
import { userAction } from "../Actions/index"

export const setUser = (item: {
    login: string
} | null) => {
    return (dispatch: Dispatch<userAction>) => {
        dispatch({
            type: userActionType.SETUSER,
            payload: item
        })
    } 
}