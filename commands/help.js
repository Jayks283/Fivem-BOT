module.exports = {
    name: 'help',
    description: "hij laat de commands van de server zien!",
   async execute(message, args){
    message.channel.send('de commands zijn:\n'
    + '**=connect**\n'
    + '**=website**\n'
    + '**=socials**' );

     }
}