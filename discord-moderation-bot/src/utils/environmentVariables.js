// File: discord-moderation-bot/src/utils/environmentVariables.js

require('dotenv').config();

const environmentVariables = {
  discordToken: process.env.DISCORD_TOKEN,
  badWordsApiKey: process.env.BAD_WORDS_API_KEY,
  // Add more environment variables as needed
};

module.exports = environmentVariables;