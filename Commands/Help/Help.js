const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help Command with all the information you wanna know"),

    async execute(interaction, client) {
        const HelpEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${client.user.username}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setURL('https://github.com/Pereira3/Botless')
            .setDescription("Heyo\nI am Botless and i am here cause u want help, am i right?\n\n___***How it works?***___\nAs you see, almost all my commands works with the ***slash***, if you don't know how to use them follow my instructions.\nFirstable - Use the slash to show the commands that the bots have, go to my section and see the commands i have.\nSecondable - Choose one command and if it works without any choice just press enter, if u have to choose just write the command you wanna followup.")
            .addFields(
                { name: '\u200b', value: '\u200b'},
                { name: '___**RANDOM:**___', value: "\n\n**• Hello -> \*hello**\nDont be shy... Say Hello to Me;\n**• Git -> /git**\nProvides you my creator git account and my git folder;\n**• Animal -> /animal**\nDisplay random animal images or facts;\n**• Actions -> /actions**\nDisplay actions from you to the other users;\n\n"},
                { name: '___**MAYBE USEFUL:**___', value: "**• Translate -> /translate**\nDisplay your original text and the translated from the language you choose;\n\n"},
                { name: '___**PROFILES:**___', value: "\n\n**• My -> /my**\nDisplay user's commands options;\n**• Server -> /server**\nDisplay server's commands options;\n**• Bot -> /bot**;\nDisplay my commands options;\n\n"},
                { name: '___**MODERATION:**___', value: "**• Kick -> /kick**\nKick the user you provide.\n*Only available to users that have permission to kick*\n"},
                { name: '___**DEVELOPER:**___', value: "**• Reload -> /reload**\nReload the Commands or the Events.\n*Only available to devs*;\n"},
                { name: '___**Use /helpcoms**___', value: 'To see the commands information with more detail use the /helpcoms and specifie the command you wanna explore better;'},
            )
            .setTimestamp(Date.now())
            .setFooter({
                text: 'Hope this helps',
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [HelpEmbed] });
    }
}
