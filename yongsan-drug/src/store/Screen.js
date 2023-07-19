export const CHATTING = "SCREEN/CHATTING";

export const changeScreen = screenState => ({ type: CHATTING, screenState });

const initalState = {
    screenState: false,
}

const stateHandler = (state = initalState, action) => {
    switch (action.type) {
        case CHATTING:
            return {
                ...state,
                screenState: true
            };
        default:
            return state;
    }
}

export default stateHandler;