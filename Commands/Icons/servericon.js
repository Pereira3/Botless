const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("svicon")
        .setDescription("Displays the present server icon"),

    async execute(interaction, client) {
        const ServerIcon = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${interaction.guild.name} Icon`)
            .setImage(`${interaction.guild.iconURL({ size: 2048, dynamic: true })}`)
            .setURL(`https://cdn.discordapp.com/avatars/${interaction.guild.id}/${interaction.guild.avatar}`)
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [ServerIcon] });
    }
}