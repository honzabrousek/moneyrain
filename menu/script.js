// Function to handle button clicks
function handleButtonClick(buttonId) {
  console.log(`Button clicked: ${buttonId}`);
  // Add functionality here based on button clicks
  // For example: navigate to different pages, trigger actions, etc.
}

// Add event listeners to the buttons
document.getElementById('easyBtn').addEventListener('click', () => handleButtonClick('easy'));
document.getElementById('mediumBtn').addEventListener('click', () => handleButtonClick('medium'));
document.getElementById('hardBtn').addEventListener('click', () => handleButtonClick('hard'));
document.getElementById('leaderboardBtn').addEventListener('click', () => handleButtonClick('leaderboard'));
document.getElementById('settingsBtn').addEventListener('click', () => handleButtonClick('settings'));
