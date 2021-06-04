const Discord = require('discord.js');
const client = new Discord.Client();
//Specify prefix here 
prefix="!"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 

 
  if(msg.content.substring(0,1)==prefix){
  msg.content=msg.content.substring(1)
   // basic command
  if (msg.content === 'ping') {
    msg.channel.send(`Latency is ${Date.now() - msg.createdTimestamp}ms`);;
  }
  }
});
//get the token from the .env file
client.login(process.env.DISCORD_BOT_SECRET);