const {ChatInputCommandInteraction} = require("discord.js");

module.exports = {
    name: "interactionCreate",
    
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction, client){
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if(!command){
            return interaction.reply({content: "Command Outdated.",  ephemeral: true});
        };
        if(command.developer && interaction.user.id != "295596122460782604"){
            //It checks if the command is a developer command (developer: true,) and if it is only the user whose ID is given there is able to use the command
            return interaction.reply({content: "This command is only available to the developer.", ephemeral:true});
        }
        
        command.execute(interaction, client);
    }
}