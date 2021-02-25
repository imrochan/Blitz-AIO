const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
}); 
client.on('message', message => {
    if (message.content === '?claim 78v4x56733mxe4758590') {
	// send back "Pong." to the channel the message was sent in
	    message.channel.send('**Key Activated** | Key: Lifetime | User: salty#8085');
        message.channel.send('**Download**: `MAC` - salty.dev/12321 | `Windows` - salty.dev/12132 ');
    }
});

client.login('ODExNjUzOTI0MzQ3NzA3NDEz.YC1Vnw.ZE28p5DTzr4zj4NthjHrIu65r-8');