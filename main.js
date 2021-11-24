const Discord = require('discord.js');



const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '='

const fs = require ('fs');
const { connect } = require('http2');

client.commands = new Discord.Collection();

const clear = require('./commands/clear');
const reactionroles = require('./commands/reactionrole');


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
const command = require(`./commands/${file}`);

client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("HoogdijkBOT is online!");
    client.user.setActivity("HoogDijk | RP");

});


client.on('message' , async message  => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return(message.reply("sorry maar jij hebt niet de permissies om dit command tegebruiken"))
     client.commands.get('clear').execute(message, args);

    

    } else if(command === 'connect'){
    client.commands.get('connect').execute(message, args);
    
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);

    }else if(command === 'reactionrole'){
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return(message.reply("sorry maar jij hebt niet de permissies om dit command tegebruiken"))
        client.commands.get('reactionrole').execute(message,discord, client, args);

    }else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    }else if(command === 'voertuigsuggestie'){
        client.commands.get('voertuigsuggestie').execute(message, Discord, args);

    }else if(command === 'serversuggestie'){
        client.commands.get('serversuggestie').execute(message, Discord, args);
        
    }
   
});

//Welcome & goodbye messages\\
client.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.name === 'Among The Server'))

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** Welkom bij HoogDijkRP voeg je bij de **' + member.guild.memberCount + '** Burgers')
    welcomeEmbed.setDescription('Welkom'  + member.user.username + 'Je burger rol krijg je na het accepteren van de regels! \n'
    + 'Coded by Jayks283' );


    member.guild.channels.cache.find(i => i.name === '「👋」welkom').send(welcomeEmbed)
})

client.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** Is verhuist **' + member.guild.memberCount + '** Zitten nog knus in hun huis')
  

    member.guild.channels.cache.find(i => i.name === '「👋」welkom').send(goodbyeEmbed)
})
//Welcome & goodbye messages end\\


    

 


 

    
  





















client.login('InsertToken');
