const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hop');
  	}if (message.content === 'avtr') {
        message.reply(message.author.avatarURL);
    }if (message.content === 'fck') {
        const attachment = new Attachment('https://i.giphy.com/media/143cE5FtVmKrNC/giphy.webp');
        message.reply(attachment);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
