module.exports = {
    
    name: 'voertuigsuggestie',
    descrioption: "Goeie idee ouhleeee!",
    async execute(message, Discord, args){

        const channel = message.guild.channels.cache.find(c => c.name === '「🚗」voertuig-suggestie');
        if(!channel) return message.channel.send('「🚗」voertuig-suggestie Channel bestaat niet');

        let messageArgs = args.join(' ');
        embed = new Discord.MessageEmbed()
       .setColor('ADD8E6')
       .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
       .setDescription(messageArgs);
   
       channel.send(embed).then((msg) =>{
           msg.react('👍');
           msg.react('👎');
           message.delete();
       }).catch((err)=>{
           throw err;

    });
    
  }
    
}