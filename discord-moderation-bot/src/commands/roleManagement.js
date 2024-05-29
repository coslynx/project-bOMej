// Filename: roleManagement.js (JavaScript)

// Import necessary libraries and modules
const Discord = require('discord.js');

// Function to assign a role to a user
const assignRole = (message, member, roleName) => {
  const role = message.guild.roles.cache.find(role => role.name === roleName);
  if (!role) {
    return message.reply(`The role ${roleName} does not exist.`);
  }

  member.roles.add(role)
    .then(() => {
      message.channel.send(`Successfully assigned the role ${roleName} to ${member.user.tag}.`);
    })
    .catch(error => {
      console.error(`Error assigning role: ${error}`);
      message.reply(`There was an error assigning the role ${roleName}.`);
    });
};

// Function to remove a role from a user
const removeRole = (message, member, roleName) => {
  const role = message.guild.roles.cache.find(role => role.name === roleName);
  if (!role) {
    return message.reply(`The role ${roleName} does not exist.`);
  }

  member.roles.remove(role)
    .then(() => {
      message.channel.send(`Successfully removed the role ${roleName} from ${member.user.tag}.`);
    })
    .catch(error => {
      console.error(`Error removing role: ${error}`);
      message.reply(`There was an error removing the role ${roleName}.`);
    });
};

// Export the functions for external use
module.exports = {
  assignRole,
  removeRole
};