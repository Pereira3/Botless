const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("my")
        .setDescription("Display user's commands options")
        .addStringOption((option) =>
            option
                .setName("option")
                .setDescription("Select the option you want")
                .setRequired(true)
                .addChoices(
                    { name: 'Icon', value:'icon' },
                    { name: 'Profile', value:'profile' },
                )
        ),

    async execute(interaction, client) {
        const options = interaction.options.getString("option")
        if (options === "Icon" || options === "icon") {
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
        if (options === "Profile" || options === "profile") {
            const EmbedProfile = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`${interaction.user.username} Profile`)
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: '• Name:', value: `${interaction.user.username}` },
                    { name: '• Discriminator:', value: `${interaction.user.discriminator}` },
                    { name: '• Tag:', value: `${interaction.user.tag}` },
                    { name: '• ID:', value: `${interaction.user.id}` },
                    { name: '• Created In:', value: `${moment(interaction.user.createdAt).format('hh:mm:ss a')}\n${moment(interaction.user.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.user.createdAt).startOf('day').fromNow()}` },
                )
                .setTimestamp(Date.now())
                .setFooter({
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [EmbedProfile] });
        }
    }
}