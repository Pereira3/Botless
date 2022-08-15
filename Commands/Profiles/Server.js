const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction} = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
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
                    { name: '• Members:', value: `${interaction.guild.memberCount}`},
                    { name: '• Roles:', value: `${interaction.guild.roles.cache.size}`},
                    { name: '• Created In:', value: `${moment(interaction.guild.createdAt).format('hh:mm:ss a')}\n${moment(interaction.guild.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.guild.createdAt).startOf('day').fromNow()}` },
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