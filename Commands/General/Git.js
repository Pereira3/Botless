const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDMPermission(false)
        .setDescription(`Display the bot's creator GitHub account`),

    async execute(interaction, client) {
        const EmbedGit = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${client.user.username}`)
            .setThumbnail('https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU')
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