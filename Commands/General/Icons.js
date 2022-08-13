const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("icons")
        .setDescription("Displays the icon that you choose")
        .addStringOption((option) =>
            option
                .setName("option")
                .setDescription("1 -> Your Icon || 2 -> Server Icon || 3 -> My Icon")
                .setRequired(true)
        ),

    async execute(interaction, client) {
        const options = interaction.options.getString("option")
        if (options === "1") {
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
        if (options === "2") {
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
        if (options === "3") {
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
}