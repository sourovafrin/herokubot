const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios')
const Commando = require('discord.js-commando');
const prefix = '.';


client.on('ready', () => {
  console.log('I am ready!');
});

  async run(message, { currencies }) {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti', {
      params: {
        fsyms: 'STEEM,SBD*',
        tsyms: currencies,
      },
    })
      .then((response) => {
        let sbdPrices = '';
        let steemPrices = '';

        Object.keys(response.data.STEEM).forEach((c) => {
          steemPrices += `${response.data.STEEM[c]} ${c}\n`;
        });

        Object.keys(response.data['SBD*']).forEach((c) => {
          sbdPrices += `${response.data['SBD*'][c]} ${c}\n`;
        });

        const richEmbed = new Discord.RichEmbed()
          .setColor('#4ba2f2')
          .addField('STEEM', steemPrices, true)
          .addField('SBD', sbdPrices, true);

        message.channel.send(richEmbed);
      })
      .catch(error => console.error(error));
  }

client.on('message', message => {
  if (message.content === prefix + 'hi') {
     message.channel.send('hello');}
    
  if (message.content === prefix + 'ping') {
     message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");}
    
  if (message.content === prefix + 'avtr') {
     message.reply(message.author.avatarURL);}
  
  if (message.content === prefix + 'fck') {
      const attachment = new Attachment('http://gif-finder.com/wp-content/uploads/2017/05/Gillian-Jacobs-Fuck-You.gif');
      message.channel.send(attachment);
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
