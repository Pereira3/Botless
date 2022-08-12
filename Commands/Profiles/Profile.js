const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("profile")
        .setDescription("Display the mentioned member's information or the command user's"),

    async execute(interaction, client) {

        const EmbedProfile = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${interaction.user.username} Profile`)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: 'Name:', value: `${interaction.user.username}` },
                { name: 'Tag:', value: `${interaction.user.tag}` },
                { name: 'ID:', value: `${interaction.user.id}` },
                { name: 'Created Since:', value: `${moment(interaction.user.createdAt).format('hh:mm:ss a')}\n${moment(interaction.user.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.user.createdAt).startOf('day').fromNow()}`},
            )
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [EmbedProfile] });
    }
}