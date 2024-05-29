// index.js

// Import necessary modules
const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables from .env file
dotenv.config();

// Create a new Discord client
const client = new Discord.Client();

// Initialize command handler
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Initialize feature modules
const profanityFilter = require('./features/profanityFilter');
const warningSystem = require('./features/warningSystem');
const muteCommand = require('./features/muteCommand');
const kickBanCommand = require('./features/kickBanCommand');
const reportingSystem = require('./features/reportingSystem');
const loggingCapabilities = require('./features/loggingCapabilities');

// Event listener when the bot is ready
client.once('ready', () => {
  console.log('Bot is online!');
});

// Event listener for incoming messages
client.on('messageCreate', message => {
  // Check if the message is a command
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // Execute the command
  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error executing that command.');
  }
});

// Login to Discord with the bot token
client.login(process.env.DISCORD_TOKEN);