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
                    { name: 'Translate', value:'translate' },
                    { name: 'Reload', value:'reload' },
                    { name: 'Kick', value:'kick' },
                    { name: 'Ban', value:'ban' },
                    { name: 'Timeout', value:'timeout' },
                    { name: 'Clear', value:'clear' },
                    { name: 'Purge', value:'purge' },
                )
        ),
    async execute(interaction, client) {
        const options = interaction.options.getString("option")
        if(options === "Hello" || options === "hello"){
            const Hello = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Hello Command Help***`)
                .setThumbnail("https://c.tenor.com/H1tZ7V1SpV8AAAAM/dog-wink.gif")
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
                .setThumbnail("https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg")
                .setDescription("As the ***my*** command -> I have options:\n\nIcon\nProfile\n\nAs i explained in the help command, when you use the ***slash my command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with your currently icon, if you choose profile, i will provide you some of your profile's informations.")
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
                .setThumbnail("https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg")
                .setDescription("As the ***server*** command -> I have options:\n\nIcon\nProfile\n\nAs i explained in the help command, when you use the ***slash server command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with the currently server icon, if you choose profile, i will provide you some of currently server's informations.")
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
                .setThumbnail("https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg")
                .setDescription("As the ***bot*** command -> I have options:\n\nIcon\nProfile\n\nAs i explained in the help command, when you use the ***slash bot command***, you have to choose between icon or profile.\nIf you choose icon, i will provide you with my currently icon, if you choose profile, i will provide you some of my currently informations.")
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
                .setThumbnail('https://c.tenor.com/QIvTzJjDaSAAAAAM/cat-computer.gif')
                .setDescription("As the ***animal*** command -> I have 2 options:\n\nFacts\nImage\n\nAs i explained in the help command, when you use the ***slash animal command***, you have to choose between image or facts.\nIf you choose facts, i will provide you with random facts from the animal you choosed, if you choose image, i will provide you with random image from the animal you choosed.")
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
                .setThumbnail('https://giffiles.alphacoders.com/398/3987.gif')
                .setDescription("As the ***actions*** command -> I have subcommands and options:\n\nSubcommands: Name / User\n\nActions: Wink / Pat / Hug\n\nAs i explained in the help command, when you use the ***slash actions command***, you have to choose the action between wink, pat or hug and the user you want.\nIf you choose wink, i will provide you with random wink gif, if you choose pat, i will provide you with random pat gif and if you choose hug, i will provide you with random hug gif.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Translate" || options === "translate"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Translate Command Help***`)
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png')
                .setDescription("As the ***translate*** command -> I have subcommands:\n\nText\nFromLanguage\nToLanguage\n\nAs i explained in the help command, when you use the ***slash translate command***, you have to choose the text you wanna translate, the language from the text and you will receive the translated text.\n***This is the link where you can see the languages the API have available: https://cloud.google.com/translate/docs/languages ***.")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Reload" || options === "reload"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Reload Command Help***`)
                .setThumbnail('https://res.cloudinary.com/practicaldev/image/fetch/s--ypttW29q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/j3IISku.gif')
                .setDescription("As the ***reload*** command -> I have options:\n\nEvents\nCommands\n\nAs i explained in the help command, when you use the ***slash reload command***, you have to choose between events or commands.\nIf you choose events, i will reload(restart) all the events i got in my code, if you choose commands, i will reload(restart) all the commands i got in my code.\n***Only devs can use this command***")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Kick" || options === "kick"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Kick Command Help***`)
                .setThumbnail('https://media.istockphoto.com/vectors/tools-icon-flat-vector-illustration-design-vector-id1161042024?k=20&m=1161042024&s=170667a&w=0&h=j-jaEitKsPz9xwipshNCQCvnMOXHozdtV_7m6l3V6kM=')
                .setDescription("As the ***kick*** command -> I have subcommands:\n\nTarget\nReason\n\nAs i explained in the help command, when you use the ***slash kick command***, you have to choose the user you want to kick.\nNext you will see one confirmation, if you choose the check you will kick the user and if you choose the x the process will be canceled.\n***Only users with permission to kick can use this command***")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Ban" || options === "ban"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Ban Command Help***`)
                .setThumbnail('https://media.istockphoto.com/vectors/tools-icon-flat-vector-illustration-design-vector-id1161042024?k=20&m=1161042024&s=170667a&w=0&h=j-jaEitKsPz9xwipshNCQCvnMOXHozdtV_7m6l3V6kM=')
                .setDescription("As the ***ban*** command -> I have subcommands:\n\nTarget\nReason\n\nAs i explained in the help command, when you use the ***slash ban command***, you have to choose the user you want to ban.\nNext you will see one confirmation, if you choose the check you will ban the user and if you choose the x the process will be canceled.\n***Only users with permission to ban can use this command***")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Timeout" || options === "timeout"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Timeout Command Help***`)
                .setThumbnail('https://media.istockphoto.com/vectors/tools-icon-flat-vector-illustration-design-vector-id1161042024?k=20&m=1161042024&s=170667a&w=0&h=j-jaEitKsPz9xwipshNCQCvnMOXHozdtV_7m6l3V6kM=')
                .setDescription("As the ***timeout*** command -> I have subcommands:\n\nTarget\nReason\nDuration\n\nAs i explained in the help command, when you use the ***slash timeout command***, you have to choose the user you want to timeout.\nNext you will see one confirmation and the required time, if you choose the check you will timeout the user for the amount of time you choosed and if you choose the x the process will be canceled.\n***Only users with permission to ban can use this command***")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Clear" || options === "clear"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Clear Command Help***`)
                .setThumbnail('https://media.istockphoto.com/vectors/tools-icon-flat-vector-illustration-design-vector-id1161042024?k=20&m=1161042024&s=170667a&w=0&h=j-jaEitKsPz9xwipshNCQCvnMOXHozdtV_7m6l3V6kM=')
                .setDescription("As the ***clear*** command -> I have subcommands:\n\nNumber\n\nAs i explained in the help command, when you use the ***slash clear command***, you have to choose the amount of messages you want to delete in the currently channel that you are using this command.\n*This command doesn't have confirmation like the others moderation commands.*\n***Only users with permission to manage messages can use this command***")
                .setTimestamp(Date.now())
                .setFooter({
                    text: 'Hope this helps',
                    iconURL: client.user.displayAvatarURL(),
                    text: client.user.username
                })
            await interaction.reply({ embeds: [Bot] });
        }
        if(options === "Purge" || options === "purge"){
            const Bot = new EmbedBuilder()
                .setColor(0xffffff)
                .setTitle(`***Purge Command Help***`)
                .setThumbnail('https://media.istockphoto.com/vectors/tools-icon-flat-vector-illustration-design-vector-id1161042024?k=20&m=1161042024&s=170667a&w=0&h=j-jaEitKsPz9xwipshNCQCvnMOXHozdtV_7m6l3V6kM=')
                .setDescription("As the ***purge*** command -> I have subcommands:\n\nTarget\n\nAs i explained in the help command, when you use the ***slash purge command***, you have to choose the user you want to delete the messages in the currently channel that you are using this command.\n*This command doesn't have confirmation like the others moderation commands.*\n***Only users with administrator permission can use this command***")
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