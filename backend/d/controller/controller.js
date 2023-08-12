const configuration = require("../modules/modules");
const { OpenAIApi } = require("openai")
const openai = new OpenAIApi(configuration);

const chatbotInfo = [
    { role: 'user', content: '너는 누구야?' },
    { role: 'assistant', content: '저는 용산경찰서에서 제작된 마약 중독 단절을 위한 챗봇입니다.' },

]

const addingPrompt = [...chatbotInfo];

const storeUserQuestion = (message) => {
    addingPrompt.push({ role: 'user', content: message });
    return addingPrompt;
}

const storeGPTResponse = (response) => {
    addingPrompt.push({ role: 'assistant', content: response });
    return addingPrompt;
}

exports.callChatGpt = async (text) => {
    console.log(...addingPrompt)
    try {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                ...addingPrompt,
                {
                    role: 'assistant', content: "Chatbot to eradicate drug addiction"
                },
                { role: "user", content: text },
                { role: 'system', content: "Chatbot to eradicate drug addiction" }],
            max_tokens: 300,
            temperature: 0,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
        });

        storeUserQuestion(text);
        storeGPTResponse(chatCompletion.data.choices[0].message.content);

        return chatCompletion.data.choices[0].message.content;
    } catch (err) {
        if (err.type === 'requests') {
            return { message: `무료 버전의 api를 사용 중이어서 생긴 오류입니다.` };
        }
        if (err.type === 'invalid_request_error') {
            return { message: `사용 가능한 토큰을` }
        }
        return { message: err }
    }
}