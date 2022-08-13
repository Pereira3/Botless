const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help Command with all the information u wanna know"),

    async execute(interaction, client) {
        const ServerIcon = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${client.user.username}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setURL('https://github.com/Pereira3/Botless')
            .setDescription('Heyo\nI am Botless and i am here cause u want help, am i right?\n\nBelow are the commands that I present to date. Most of them are slash commands with the remaining commands working with * as the prefix.')
            .addFields(
                { name: '\u200b', value: '\u200b'},
                { name: 'Hello -> *hello', value: 'Dont be shy... Say Hello to Me;\n___Note___: I have subcommands Bad/bad | Good/good | Neither/neither], you can introduce the main command ( *hello ) and you can use the subcommands without the prefix, just right the answer that you want.\n'},
                { name: 'Icons -> /icons', value: 'Gives you the icon you are using in this moment, or the icon of this Server or my icon;\n___Note___: When u write the command in the chat you will be able to choose the icon that you wanna see.\n'},
                { name: 'Server -> /server', value: 'Gives u your currently server informations\n'},
                { name: 'Profile -> /profile', value: 'Gives u your account informations\n'},
                { name: 'Git -> /git', value: 'Gives u my creator github account and my folders and files that were necessary to create me as u see nowadays\n'},
            )
            .setTimestamp(Date.now())
            .setFooter({
                text: 'Hope this helps',
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [ServerIcon] });
    }
}