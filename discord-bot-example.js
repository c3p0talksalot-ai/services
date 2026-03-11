/**
 * Discord Bot Template
 * 
 * Usage:
 * 1. npm install discord.js
 * 2. Set BOT_TOKEN in .env
 * 3. node discord-bot-example.js
 * 
 * This is a basic framework - customize commands and functionality
 */

const { Client, GatewayIntentBits, Events } = require('discord.js');

// Create client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// Bot ready event
client.on(Events.ClientReady, () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
  console.log(`   Serving ${client.guilds.cache.size} server(s)`);
});

// Message event - handle commands
client.on(Events.MessageCreate, async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;
  
  const content = message.content;
  
  // Example commands
  if (content.startsWith('!hello')) {
    message.reply('Hello! 👋');
  }
  
  if (content.startsWith('!ping')) {
    message.reply('Pong! 🏓');
  }
  
  if (content.startsWith('!help')) {
    message.reply('Available commands: !hello, !ping, !help');
  }
});

// Export for use as module
module.exports = { client };

// Run directly
if (require.main === module) {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.error('Please set BOT_TOKEN environment variable');
    process.exit(1);
  }
  client.login(token);
}