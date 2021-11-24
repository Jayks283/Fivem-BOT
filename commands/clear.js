module.exports = {
    name: 'clear',
    description: "Ruimt berichten op naar de prullenbak!",
   async execute(message, args) {
        if(!args[0]) return message.channel.send("Voer alsjeblieft de hoeveelheid berichten in die je wilt clearen!");
        if(isNaN(args[0])) return message.channel.send("Voer alsjeblieft een geldig getal in!");

        if(args[0] > 100) return message.channel.send("Je kan niet meer dan 100 berichten clearen!");
        if(args[0] < 1) return message.channel.send("Je moet minstens 1 berichten clearen!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }

}