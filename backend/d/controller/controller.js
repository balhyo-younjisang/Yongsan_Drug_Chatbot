const configuration = require("../modules/modules");
const {OpenAIApi} = require("openai")
const openai = new OpenAIApi(configuration);

exports.callChatGpt = async (text) =>{
    try {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: text}],
          });
          console.log(chatCompletion.data.choices[0].message.content);;
    } catch (err) {
        console.error(error);
    }
}