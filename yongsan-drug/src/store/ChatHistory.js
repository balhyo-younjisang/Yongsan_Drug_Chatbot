export const APPEND = "CHATHISTORY/APPEND";
export const POP = "CHATHISTORY/POP"

export const appendChatArr = (chat) => ({ type: APPEND, chat });
export const popChatArr = () => ({ type: POP });

const initalState = {
    ChatHistory: []
}

const appendHandler = (state = initalState, action) => {
    const { ChatHistory } = state;

    switch (action.type) {
        case APPEND:
            return {
                ChatHistory: [ // ChatHistory에 새로운 값 넣어서 저장
                    ...ChatHistory,
                    action.chat
                ]
            }
        case POP:
            return {
                ChatHistory: [
                    ChatHistory.slice(0, ChatHistory.length - 1)
                ]
            };

        default:
            return state
    }
}

export default appendHandler;