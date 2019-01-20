
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === prefix + 'hi') {
     message.channel.send('hello'); 
 }if (message.content === prefix + 'ping') {
     message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
 }if (message.content === prefx + 'avtr') {
     message.reply(message.author.avatarURL);
};
client.login(process.env.BOT_TOKEN);
