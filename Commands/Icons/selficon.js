const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("icon")
        .setDescription("Displays your icon"),

    async execute(interaction, client) {
        const Icon = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${interaction.user.username} Icon`)
            .setImage(`${interaction.user.displayAvatarURL({ size: 2048, dynamic: true })}`)
            .setURL(`https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}`)
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [Icon] });
    }
}