// reportingSystem.js

const Discord = require('discord.js');
const moment = require('moment');
const { logAction } = require('./loggingCapabilities');

module.exports = {
  handleReport: async (message, user, reason) => {
    try {
      // Create a new embed for the report
      const reportEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('User Report')
        .addField('Reported User', user)
        .addField('Reported By', message.author)
        .addField('Reason', reason)
        .setTimestamp();

      // Send the report to a designated channel
      const reportChannel = message.guild.channels.cache.find(channel => channel.name === 'reports');
      if (!reportChannel) {
        return message.channel.send('Could not find a reports channel');
      }

      reportChannel.send(reportEmbed);

      // Log the report action
      logAction(message.author, `reported ${user} for ${reason}`, moment().format());

      message.channel.send('Report has been submitted successfully.');
    } catch (error) {
      console.error('Error handling report:', error);
      message.channel.send('An error occurred while processing the report.');
    }
  },
};