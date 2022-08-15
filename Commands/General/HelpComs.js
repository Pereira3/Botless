const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("helpcoms")
        .setDescription("Help Embed with all the information about the especified command you wanna know")
        .addStringOption((option) =>
            option
                .setName("option")
                .setDescription("Select the option you want")
                .setRequired(true)
                .addChoices(
                    { name: 'Hello', value:'hello' },
                    { name: 'My', value:'my' },
                    { name: 'Server', value:'server' },
                    { name: 'Bot', value:'bot' },
                    { name: 'Git', value:'git' },
                    { name: 'Animal', value:'animal' },
                    { name: 'Actions', value:'actions' },
                )
        ),
    async execute(interaction, client) {
        const options = interaction.options.getString("option")
        if(options === "Hello" || options === "hello"){
            const Hello = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Hello Command Help***`)
                .setThumbnail("https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif")
                .setDescription("As the ***hello*** command -> I have subcommands:\n\nBad/bad\nGood/good\nNeither/neither\n\nYou can introduce the main command ( *hello ) and you can use the subcommands without the prefix, just right the answer that you want. If u use the prefix before the second command line (good, bad or neither), i'll don't identify your answer.\n")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Hello] });
        }
        if(options === "My" || options === "my"){
            const Me = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***My Command Help***`)
                .setThumbnail("https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif")
                .setDescription("As the ***my*** command -> I have options:\n\nIcon/icon\nProfile/profile\n\nAs i explained in the help command, when you use the ***slash my command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with your currently icon, if you choose profile, i will provide you some of your profile's informations.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Me] });
        }
        if(options === "Server" || options === "server"){
            const Server = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Server Command Help***`)
                .setThumbnail("https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif")
                .setDescription("As the ***server*** command -> I have options:\n\nIcon/icon\nProfile/profile\n\nAs i explained in the help command, when you use the ***slash server command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with the currently server icon, if you choose profile, i will provide you some of currently server's informations.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Server] });
        }
        if(options === "Bot" || options === "bot"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Bot Command Help***`)
                .setThumbnail("https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif")
                .setDescription("As the ***bot*** command -> I have options:\n\nIcon/icon\nProfile/profile\n\nAs i explained in the help command, when you use the ***slash bot command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with my currently icon, if you choose profile, i will provide you some of my currently informations.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Git" || options === "git"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Git Command Help***`)
                .setThumbnail('https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU')
                .setDescription("As the ***git*** command -> Provide you with:\nMy creator's github account\nMy github folder")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Animal" || options === "animal"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Animal Command Help***`)
                .setThumbnail('https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif')
                .setDescription("As the ***animal*** command -> I have 2 options: The first one you can choose the animal you want from the API list i have in this momment, and second one i have:\n\nFacts/fact\nImage/image\n\nAs i explained in the help command, when you use the ***slash animal command***, you have to choose between image or facts.\nIf you choose facts, i will provide you with random facts from the animal you choosed, if you choose image, i will provide you with random image from the animal you choosed.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Actions" || options === "actions"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Actions Command Help***`)
                .setThumbnail('https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif')
                .setDescription("As the ***actions*** command -> I have options:\n\nWink/wink\nPat/pat\nHug/hug\n\nAs i explained in the help command, when you use the ***slash actions command***, you have to choose between wink, pat or hug.\nIf you choose wink, i will provide you with random wink gif, if you choose pat, i will provide you with random pat gif and if you choose hug, i will provide you with random hug gif.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
    }    
}