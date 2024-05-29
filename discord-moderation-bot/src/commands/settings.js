// File: settings.js (JavaScript)

const fs = require('fs');

// Function to read the settings from a JSON file
const readSettings = () => {
  try {
    const settingsData = fs.readFileSync('settings.json');
    return JSON.parse(settingsData);
  } catch (err) {
    console.error('Error reading settings:', err);
    return {};
  }
};

// Function to update the settings in the JSON file
const updateSettings = (newSettings) => {
  try {
    fs.writeFileSync('settings.json', JSON.stringify(newSettings, null, 2));
    console.log('Settings updated successfully');
  } catch (err) {
    console.error('Error updating settings:', err);
  }
};

module.exports = {
  readSettings,
  updateSettings,
};