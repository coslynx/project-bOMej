// File: loggingCapabilities.js (JavaScript)

const moment = require('moment');
const fs = require('fs');

// Function to log moderation actions with timestamps
const logAction = (actionType, moderator, targetUser) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const logMessage = `[${timestamp}] ${actionType} by ${moderator} on ${targetUser}\n`;

  fs.appendFile('moderation.log', logMessage, (err) => {
    if (err) {
      console.error('Error logging action:', err);
    }
  });
};

module.exports = { logAction };