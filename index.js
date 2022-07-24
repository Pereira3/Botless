const Discord = require("discord.js");
const {token} = require("./tkn.json");
const prefix = '-';
const bot = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: 3276797
});

bot.on('ready', () => {
    console.log("Ready for Work!") //console response to the bot being online
    bot.user.setActivity("with ur Mom");
});

bot.on('messageCreate', msg =>{
    //    CHECKING MGS    //
    if(msg.author.bot) return; //avoid bot loop messages and commands

    if(msg.content === prefix + "Hello" || msg.content === prefix + "hello"){
        msg.reply ("Hello Big Fella");
    }else if (msg.content === prefix + "Server" || msg.content === prefix + "server"){
        msg.reply (`This Server have ${bot.guilds.cache.size} members in this moment`);
    }
});

bot.login(token); //take the token of the bot and put it online