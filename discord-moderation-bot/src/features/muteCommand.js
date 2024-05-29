// Filename: muteCommand.js (JavaScript)

// Importing necessary libraries and modules
const { Permissions } = require('discord.js');

// Function to mute a user in the server
const muteUser = async (message, targetUser, muteDuration) => {
  try {
    // Checking if the bot has the necessary permissions to mute users
    if (!message.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
      return message.reply('You do not have the required permissions to mute users.');
    }

    // Muting the target user
    const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if (!mutedRole) {
      return message.reply('The Muted role does not exist in this server.');
    }

    await targetUser.roles.add(mutedRole);

    // Setting a timer to automatically unmute the user after the specified duration
    setTimeout(async () => {
      await targetUser.roles.remove(mutedRole);
      message.channel.send(`${targetUser} has been unmuted.`);
    }, muteDuration);

    message.channel.send(`${targetUser} has been muted for ${muteDuration / 60000} minutes.`);
  } catch (error) {
    console.error('Error occurred while muting user:', error);
    message.reply('An error occurred while muting the user.');
  }
};

// Exporting the muteUser function for external use
module.exports = {
  muteUser,
};
