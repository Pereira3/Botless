const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Reload")
        .setDescription("Reload your Events/Commands")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand((options) =>
            options
            .setName("Events")
            .setDescription("Reload your Events"))
        .addSubcommand((options) =>
            options
            .setName("Commands")
            .setDescription("Reload your Commands")),
            /**
             * @param {(ChatInputCommandInteraction)} interaction
             */
    execute(interaction, client){
        const sub = interaction.options.getSubcommand();
        
        switch(sub){
            case "Events": {
                loadEvents(client);
                interaction.reply({content: "Events Reloaded"})
            }break;
            case "Commands": {
                loadCommands(client);
                interaction.reply({content: "Commands Reloaded"})
            }break;
        }
    }
}