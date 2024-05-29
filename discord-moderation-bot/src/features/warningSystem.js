// File: warningSystem.js (JavaScript)

const { Collection } = require('discord.js');

const warnings = new Collection();

module.exports = {
  addWarning: function(userId, reason) {
    if (!warnings.has(userId)) {
      warnings.set(userId, []);
    }
    const userWarnings = warnings.get(userId);
    userWarnings.push({ reason, timestamp: new Date() });
    warnings.set(userId, userWarnings);
  },

  getWarnings: function(userId) {
    if (warnings.has(userId)) {
      return warnings.get(userId);
    } else {
      return [];
    }
  },

  clearWarnings: function(userId) {
    if (warnings.has(userId)) {
      warnings.delete(userId);
    }
  }
};