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
            .setDescription('Heyo\nI am Botless and i am here cause u want help, am i right?\nHow can i helpya?')
            .addFields(
                { name: '\u200b', value: '\u200b'},
                { name: 'Hello -> *hello', value: 'Dont be shy... Say Hello to Me;\n*Note: I have subcommands [(B b)ad / (G g)ood / (N n)either], u can introduce the main command (*hello), u can use the subcommands without the prefix, just right the anwser that u want.'},
                { name: 'Icon -> /icon', value: 'Gives you the icon u are using in this moment;'},
                { name: 'Boticon -> /boticon', value: 'Gives you my icon;'},
                { name: 'Servericon -> /svicon', value: 'Gives you the icon of this Server'},
                { name: 'Serverinfo -> /svinfo', value: 'Gives u your currently server informations'},
                { name: 'Profile -> /profile', value: 'Gives u your account informations'},
                { name: 'Git -> /git', value: 'Gives u my creator github account and my folders and files that were necessary to create me as u see nowadays'},
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