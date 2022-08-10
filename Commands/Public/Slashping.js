const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction){
        if (!interaction.isChatInputCommand()) return;

	    if (interaction.commandName === 'ping') {
            await interaction.reply({content: "Pong", ephemeral: true})
            await interaction.followUp({content: "Pong Again", ephemeral:true})
        }
    }
}