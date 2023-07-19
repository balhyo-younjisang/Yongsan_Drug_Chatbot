export const CHANGE = "CHAT/CHANGE";

export const changeChat = chat => ({ type: CHANGE, chat });

const initalState = {
    chat: ""
}

const changeHandler = (state = initalState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                chat: action.chat,
            };
        default:
            return state;
    }
};

export default changeHandler;