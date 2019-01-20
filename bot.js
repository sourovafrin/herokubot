const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (msg === prefix + 'hi') {
     message.channel.send('hello');}
    
  if (msg === prefix + 'ping') {
     message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");}
    
  if (msg === prefix + 'avtr') {
     message.reply(message.author.avatarURL);}
  
  if (msg === 'Ayasha is beautiful') {
     message.react('😂');
     message.channel.send("Stop lying. She won't pay you for that");}
  
  if (msg === prefix + 'fck') {
      const attachment = new Attachment('http://gif-finder.com/wp-content/uploads/2017/05/Gillian-Jacobs-Fuck-You.gif');
      message.channel.send(attachment);}
          
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
