module.exports = {
    name: 'ping',
    description: "laat de ping van de discord bot zien!",
   async execute(message, args){
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);

   }
}