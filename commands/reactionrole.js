
module.exports = { 
    name: 'reactionrole',
    description: "Als je hier reageert krijg je een rol!",
    async execute(message, Discord, client, args){

     const channel = '847746755181543435';
     const burgerRole = message.guild.roles.cache.find(role => role.name === "Burger");
     const eventRole = message.guild.roles.cache.find(role => role.name === "Events");
     const updateRole = message.guild.roles.cache.find(role => role.name === "Updates");

     const burgerRoleEmoji = ':boy:';
     const eventRoleEmoji = ':tada:';
     const updateRoleEmoji = ':hammer_and_wrench:';

     

      let embed = new Discord.MessageEmbed() 
      .setColor('#add8e6')
      .setTitle('claim je role!')
      .setDescription('**Kies 1 van de onderstaande rollen om meldingen te krijgen of toegang te krijgen tot de discord server!** \n\n'
      + `${burgerRoleEmoji} Kies de burger rol met :boy: om toegang te krijgen tot heel de discord\n`
      + `${eventRoleEmoji} kies de Event rol met :tada: om meldingen te krijgen van events\n`
      + `${updateRoleEmoji} kies de Update rol met :tools: om meldingen te krijgen over updates`);

     
     let MessageEmbed = await message.channel.send(embed);

      MessageEmbed.react(':boy:');
      MessageEmbed.react(':hammer_and_wrench:');
      MessageEmbed.react(':tada:');

      client.on('messageReactionAdd', async (reaction, user) => {


          if (reaction.message.partial) await reaction.message.fetch();
          if(reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;

          if (reaction.message.channel.id == channel) {
              if (reaction.emoji.react === burgerRoleEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(burgerRole);
                  
              }
              if (reaction.emoji.name === eventRoleEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(eventRole);

          }
          if (reaction.emoji.name === updateRoleEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(updateRole);
          }

            
          } else {

         return;
        
        }
      

      });
    }
    

  }
      

        
  