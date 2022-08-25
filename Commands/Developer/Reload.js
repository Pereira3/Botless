const {ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client} = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Reload your commands/events.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption((options) =>
            options
                .setName("option")
                .setDescription("Select the option you want")
                .setRequired(true)
                .addChoices(
                    { name: 'Events', value:'events' },
                    { name: 'Commands', value:'commands' },
                )
        ),
            /**
             * 
             * @param {ChatInputCommandInteraction} interaction
             * @param {Client} client
             */

    async execute(interaction, client){
        const options = interaction.options.getString("option")
        if( options === "events" || options === "Events"){
            for(const [key, value] of client.events )
                client.removeListener(`${key}`, value, true);
                loadEvents(client);
                interaction.reply({content: "Reloaded Events"})
        }
        if( options === "commands" || options === "Commands"){
            loadCommands(client);
            interaction.reply({content: "Reloaded Commands"})
        }
    }
}