const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("my")
        .setDMPermission(false)
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
        const target = interaction.options.getMember("target") || interaction.member;
        const { roles, user } = target;

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
                .setImage(user.bannerURL({ dynamic: true, size: 1024 }))
                .addFields(
                    { name: '• Name:', value: `${interaction.user.username}` },
                    { name: '• Discriminator:', value: `${interaction.user.discriminator}` },
                    { name: '• Tag:', value: `${interaction.user.tag}` },
                    { name: '• ID:', value: `${interaction.user.id}` },
                    { name: '• Created In:', value: `${moment(interaction.user.createdAt).format('hh:mm:ss a')}\n${moment(interaction.user.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.user.createdAt).startOf('day').fromNow()}`, inline: true },
                    { name: '• Joined Server', value: `${moment(target.joinedTimestamp).format('hh:mm:ss a')}\n${moment(target.joinedTimestamp).format('Do MMMM YYYY')}\n${moment(target.joinedTimestamp).startOf('day').fromNow()}`, inline: true },
                    {
                        name: `• Roles (${roles.cache.size - 1})`, 
                        value: roles.cache.map(roles => roles).sort((a, b) => b.position - a.position).join(" ").replace("@everyone", "") || "None" 
                    },
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