import { userActionType } from "../Action-Types";

type SetUserAction = {
    type: userActionType.SETUSER
    payload: {
        login: string
    } | null
}

export type userAction = SetUserAction