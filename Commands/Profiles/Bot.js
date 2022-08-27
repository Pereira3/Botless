const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bot")
        .setDescription(`Display my commands options`)
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

        if(interaction.guild === null) return interaction.user.send("Command only available in Servers."); //ignore DM messages

        const options = interaction.options.getString("option")
        if (options === "Icon" || options === "icon") {
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
        if (options === "Profile" || options === "profile") {
            let owner = await interaction.guild.fetchOwner()

            const BotProfile = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`${client.user.username} Profile`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: '• Name:', value: `${client.user.username}` },
                    { name: '• Discriminator:', value: `${client.user.discriminator}` },
                    { name: '• Tag:', value: `${client.user.tag}` },
                    { name: '• ID:', value: `${client.user.id}` },
                    { name: '• Owner:', value: '[Perëïra (...)](https://discordapp.com/users/295596122460782604/)'},
                    { name: '• Commands:', value: `${client.commands.size}`},
                    { name: '• Servers:', value: `${client.guilds.cache.size}`},
                    { name: '• Created In:', value: `${moment(client.user.createdAt).format('hh:mm:ss a')}\n${moment(client.user.createdAt).format('Do MMMM YYYY')}\n${moment(client.user.createdAt).startOf('day').fromNow()}` },
                )
                .setTimestamp(Date.now())
                .setFooter({
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [BotProfile] });
        }
    }
}