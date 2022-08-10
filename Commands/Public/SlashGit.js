const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription(`Display the bot's creator GitHub account`),

    async execute(interaction, client) {
        const EmbedGit = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${client.user.username}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: 'Creator Account:', value: 'https://github.com/Pereira3' },
                { name: 'GitHub Folder:', value: 'https://github.com/Pereira3/Botless'},
            )
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [EmbedGit] });
    }
}