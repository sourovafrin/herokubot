
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (message.content === prefix + 'hi') {
    message.channel.send('hello');
  }
});
client.login(process.env.BOT_TOKEN);
