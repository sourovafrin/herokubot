const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === prefix + 'hi') {
     message.channel.send('hello');}
    
  if (message.content === prefix + 'ping') {
     message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");}
    
  if (message.content === prefix + 'avtr') {
     message.reply(message.author.avatarURL);}
  
  if (message.content === prefix + 'fck') {
      const attachment = new Attachment('https://i.giphy.com/media/143cE5FtVmKrNC/giphy.webp');
      message.channel.send(attachment);
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
