const webhookInfo = require('./webhookadmin')//public
const discord = require('discord.js')
 const webhookUser = require('./profiles.js');

//personal webhook success
function personalsuccess(){
const webhookClient = new discord.WebhookClient(webhookUser.webhookID,webhookUser.webhookToken);
const embed = new discord.MessageEmbed()
    .setTitle('Success | Astro AIO')
    .setColor('#ffff4d')
    .setFooter('Astro AIO')
    .setDescription(`Module: Shopify | Site: ${webhookInfo.site} | Product ID: ${webhookInfo.id} `)
    .setThumbnail('https://cdn.discordapp.com/attachments/757397472644562994/778767956040876072/No-wQRNr_400x400.jpg')
    .setTimestamp();
 
      webhookClient.send('', {
          username: 'Astro AIO',
          avatarURL: 'https://cdn.discordapp.com/attachments/757397472644562994/778767956040876072/No-wQRNr_400x400.jpg',
          embeds: [embed],
  })
}

//Public webhook success
function publicsuccess(){
 const webhookClient = new discord.WebhookClient(webhookInfo.webhookID,webhookInfo.webhookToken);
const embed = new discord.MessageEmbed()
    .setTitle('Success | Astro AIO')
    .setColor('#ffff4d')
    .setFooter('Astro AIO')
    .setDescription(`Module: Shopify | Site: ${webhookInfo.site} | Product ID: ${webhookInfo.id} `)
    .setThumbnail('https://cdn.discordapp.com/attachments/757397472644562994/778767956040876072/No-wQRNr_400x400.jpg')
    .setTimestamp();
 
      webhookClient.send('', {
          username: 'Astro AIO',
          avatarURL: 'https://cdn.discordapp.com/attachments/757397472644562994/778767956040876072/No-wQRNr_400x400.jpg',
          embeds: [embed],
  })
}


publicsuccess()//put these in shopify file once checkout is complete

personalsuccess()
