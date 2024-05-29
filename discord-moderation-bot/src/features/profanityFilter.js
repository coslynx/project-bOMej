// profanityFilter.js

const { Client, Message } = require('discord.js');
const Filter = require('bad-words');

/**
 * Initialize a profanity filter for the bot
 * @param {Client} client - The Discord client
 */
const profanityFilter = (client) => {
  const filter = new Filter();

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (filter.isProfane(message.content)) {
      message.delete();
      message.reply('Please refrain from using offensive language.');
    }
  });
};

module.exports = profanityFilter;