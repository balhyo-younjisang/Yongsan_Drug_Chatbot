import { combineReducers } from "redux";

import chat from "./Chat";
import Screen from "./Screen";
import ChatHistory from "./ChatHistory";

const rootReducer = combineReducers({
    chat,
    Screen,
    ChatHistory
});

export default rootReducer;