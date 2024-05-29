// kickBanCommand.js

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Bot is ready');
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        try {
          await member.kick();
          message.channel.send(`${user.tag} has been kicked successfully.`);
        } catch (error) {
          console.error(error);
          message.channel.send('An error occurred while trying to kick the user.');
        }
      } else {
        message.channel.send('That user is not in this server.');
      }
    } else {
      message.channel.send('You need to mention a user to kick.');
    }
  } else if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        try {
          await member.ban();
          message.channel.send(`${user.tag} has been banned successfully.`);
        } catch (error) {
          console.error(error);
          message.channel.send('An error occurred while trying to ban the user.');
        }
      } else {
        message.channel.send('That user is not in this server.');
      }
    } else {
      message.channel.send('You need to mention a user to ban.');
    }
  }
});

client.login('YOUR_BOT_TOKEN');