const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === prefix + 'hi') {
    message.delete(0);
     message.channel.send('hello');}
    
  if (message.content === prefix + 'ping') {
    message.delete(0);
     message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");}
    
  if (message.content === prefix + 'avtr') {
    message.delete(0);
     message.reply(message.author.avatarURL);}
  
  if (message.content === 'Ayasha is beautiful') {
     message.react('😂');
     message.channel.send("Stop lying. She won't pay you for that");}
  
  if (message.content === prefix + 'fck') {
    message.delete(0);
      const attachment = new Attachment('http://gif-finder.com/wp-content/uploads/2017/05/Gillian-Jacobs-Fuck-You.gif');
      message.channel.send(attachment);}
          
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
