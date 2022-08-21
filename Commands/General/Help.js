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
                { name: 'Hello -> *hello', value: 'Dont be shy... Say Hello to Me;\n'},
                { name: 'My -> /my', value: "Display user's commands options;\n"},
                { name: 'Server -> /server', value: "Display server's commands options;\n"},
                { name: 'Bot -> /bot', value: 'Display my commands options;\n'},
                { name: 'Git -> /git', value: "Gives you my creator git account and my git folder;\n"},
                { name: 'Animal -> /animal', value: "Display random animal images or facts;\n"},
                { name: 'Actions -> /actions', value: "Display actions from you to the other users;\n"},
                { name: 'Translate -> /translate', value: "Display your original text and the translated from the language you choose;\n"},
                { name: 'Reload -> /reload', value: "Reload the Commands or the Events.\n*Note: Only available to adms*;\n"},
                { name: 'Use /helpcoms', value: 'To see the commands information with more detail use the /helpcoms and specifie the command you wanna explore better;'},
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