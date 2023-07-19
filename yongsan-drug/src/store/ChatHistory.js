export const APPEND = "CHATHISTORY/APPEND";

export const appendChatArr = (chat) => ({ type: APPEND, chat });

const initalState = {
    ChatHistory: []
}

const appendHandler = (state = initalState, action) => {
    const { ChatHistory } = state;

    switch (action.type) {
        case APPEND:
            return {
                ...state, // 기존 state
                ChatHistory: [ // ChatHistory에 새로운 값 넣어서 저장
                    ...ChatHistory,
                    action.chat
                ]
            }
        default:
            return state
    }
}

export default appendHandler;