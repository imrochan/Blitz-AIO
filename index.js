const RPC = require("discord-rpc");
const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');
const setTitle = require('node-bash-title');
const prompt = require('prompt-sync')();

setTitle(("salty's Blitz AIO | 0 Carted | 0 Checkouts | 0 Declines | Connected to AUTH server. "));
const rpc = new RPC.Client({
  transport: "ipc"
  });
     rpc.on("ready", () => 
   {
     rpc.setActivity({
     details: "v0.0.1",
     state: "Unmatched Power ⚡",
     startTimestamp: new Date(),
     largeImageKey: "large",
     largeImageText: "Blitz AIO - @sxoulzz",
     smallImageKey: "small",
     smallImageText: "100 Tasks Running"
  });
  });
  rpc.login({     
  clientId: "813741770583834664",});

 

  function webhookTest(){

    const webhookClient = new Discord.WebhookClient('813847298219180062', '6X4Cg6hCK4-pFF2RFoNr2O_NvpuZQ_4Jrhx0m7n-Ygvd2Qs7kYU_yy0Kf-oHPd4qMtxN');
    const embed = new Discord.MessageEmbed()
	      .setTitle('Webhook Test')
    	  .setColor('#0099ff')
        .setFooter('Blitz AIO')
        .setDescription('Successful Webhook Test!')
        .setThumbnail('https://media.discordapp.net/attachments/779832681411510332/814094072410800138/Frame_16.png?width=360&height=327')
        .setTimestamp();

    webhookClient.send('', {
      username: 'Blitz AIO',
      avatarURL: 'https://media.discordapp.net/attachments/779832681411510332/814094072410800138/Frame_16.png?width=360&height=327',
      embeds: [embed],
      
    }); 
    menu()
    }
    
    function menu(){
var one = 'webhook test'
console.log('\n\n\nWELCOME TO BLITZ')
console.log('\n\nV1.0.01: The Journey Begins')
console.log('\n --- Key: Developer\n --- Profiles Loaded: 8\n --- Tasks Loaded: 300\n --- Proxies Loaded: 1000\n\ntype help for command list')
var selection = prompt('[Blitz] ')
if (selection == one)
{
  webhookTest();
  
} else {
  console.log('Error with your selection.')
  menu()
}



    };


  menu();

  