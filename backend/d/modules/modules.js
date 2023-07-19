const { Configuration} = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey:process.env.OPENAI_API_KEY,
});

module.exports = configuration