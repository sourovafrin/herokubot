const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';



client.on('ready', () => {
  console.log('I am ready!');
});
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1);

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
  
   if (msg.startsWith(prefix + 'clr')) {
       async function purge(){
       const fetched = await message.channel.fetchMessages({limit: args[0]});
        message.channel.bulkDelete(fetched)}
  purge();}
          
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
