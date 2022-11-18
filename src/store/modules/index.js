import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import subject from "./subject"
import user from "./user";

const appReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        subject,
        user
    });

export default appReducer;
