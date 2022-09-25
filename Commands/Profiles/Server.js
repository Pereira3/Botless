const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction, ChannelType} = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDMPermission(false)
        .setDescription("Display server's commands options")
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

        const { guild } = interaction;
        const {members, channels, emojis, roles, stickers} = guild;

        const getChannelTypeSize = type => channels.cache.filter(channel => type.includes(channel.type)).size;
        
        const totalChannels = getChannelTypeSize([
            ChannelType.GuildText,
            ChannelType.GuildNews,
            ChannelType.GuildVoice,
            ChannelType.GuildStageVoice,
            ChannelType.GuildForum,
            ChannelType.GuildPublicThread,
            ChannelType.GuildPublicThread,
            ChannelType.GuildPrivateThread,
            ChannelType.GuildNewsThread,
            ChannelType.GuildCategory
        ]);
        
        const regularRoles = roles.cache.filter(role => !role.managed);
        const managedRoles = roles.cache.filter(role => role.managed);
        const botCount = members.cache.filter(member => member.user.bot).size;

        const options = interaction.options.getString("option")

        if (options === "Icon" || options === "icon") {
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
        if (options === "Profile" || options === "profile") {
            let owner = await interaction.guild.fetchOwner()

            const ServerInfoEmbed = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`${interaction.guild.name} Profile`)
                .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .addFields(
                    { name: '• Name:', value: `${interaction.guild.name}` },
                    { name: '• ID:', value: `${interaction.guild.id}` },
                    { name: '• Owner:', value: `${owner.user.username}` },
                    { name: '• Created In:', value: `${moment(interaction.guild.createdAt).format('hh:mm:ss a')}\n${moment(interaction.guild.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.guild.createdAt).startOf('day').fromNow()}` },
                    { name: `• Users (${interaction.guild.memberCount})`, value: [
                        `\t - Members: ${interaction.guild.memberCount - botCount}`,
                        `\t - Bots: ${botCount}`
                    ].join("\n")},
                    { name: `Roles (${roles.cache.size - 1})`, value: !regularRoles ? "None" : [
                        `\t - User Roles:\n${regularRoles.map(role => role).slice(1, regularRoles.size).sort((a, b) => b.position - a.position).join(" ") || "None"}`,
                        `\t - Managed Roles:\n${managedRoles.map(role => role).sort((a, b) => b.position - a.position).join(" ") || "None"}`
                    ].join("\n")},
                    { name: `Emojis & Stickers (${emojis.cache.size + stickers.cache.size})`, value: [
                        `\t - Animated: ${emojis.cache.filter(emoji => emoji.animated).size}`,
                        `\t - Static: ${emojis.cache.filter(emoji => !emoji.animated).size}`,
                        `\t - Stickers: ${stickers.cache.size}`
                    ].join("\n")},
                    { name: `Channels, Threads & Categories (${totalChannels}):`, value: [
                        `\t - Text: ${getChannelTypeSize([ChannelType.GuildText, ChannelType.GuildForum, ChannelType.GuildNews])}`,
                        `\t - Voice: ${getChannelTypeSize([ChannelType.GuildVoice, ChannelType.GuildStageVoice])}`,
                        `\t - Threads: ${getChannelTypeSize([ChannelType.GuildPublicThread, ChannelType.GuildPrivateThread, ChannelType.GuildNewsThread])}`,
                    ].join("\n")},
                )
                .setTimestamp(Date.now())
                .setFooter({
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [ServerInfoEmbed]});
        }
    }
}