// File: discord-moderation-bot/src/utils/timestampHandler.js (JavaScript)

const moment = require('moment');

// Function to generate a timestamp for the current time
const getCurrentTimestamp = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

// Export the getCurrentTimestamp function
module.exports = { getCurrentTimestamp };