const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("boticon")
        .setDescription("Displays my icon"),

    async execute(interaction, client) {
        const BotIcon = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${client.user.username} Icon`)
            .setImage(`${client.user.displayAvatarURL({ size: 2048, dynamic: true })}`)
            .setURL(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`)
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [BotIcon] });
    }
}