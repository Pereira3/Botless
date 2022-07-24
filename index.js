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


//------------------------------EMBEDS------------------------------
const HelpEmbed = {
	color: 0xFFFFFF,
	title: 'Botless',
    url: "https://github.com/Pereira3/Botless",
	description: 'Heyo\nI am Botless and i am here cause u want help, am i right?\nHow can i helpya?',

	thumbnail: { //image that appears in the superior right corner
		url: 'https://i.pinimg.com/564x/36/2c/85/362c85534a98650a29c12d683383e2db.jpg',
	},
	fields: [
        { //Take Space between the first Field and the Others
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Prefix:',
			value: 'The only prefix i have available until today is -',
        },
        { //Take Space between the first Field and the Others
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Hello',
			value: 'Dont be shy... Say Hello to Me;',
			inline: false,
		},
        {
			name: 'Server',
			value: 'Members/members - Gives you the number of members in the actual server;\nServerIcon/servericon - Gives you the icon of this Server',
			inline: false,
		},
		{
			name: 'Bot',
			value: 'BotIcon/boticon - Gives you my icon;',
			inline: false,
		},
		{
			name: 'For You',
			value: 'Icon/icon - Gives you the icon u are using in this moment;',
			inline: false,
		},
		{
			name: 'Socials',
			value: 'Git/git - Gives you my creator social;',
			inline: false,
		},
	],
	/*image: { Global Huge Image
		url: 'https://i.pinimg.com/564x/ab/92/1d/ab921dd3b647332856d534e0dc9e1ef7.jpg',
	},*/
	timestamp: new Date(),
	footer: { //Footer - The bottom of the box that cotain the goodbye
		text: 'Hope this helps',
		icon_url: 'https://i.pinimg.com/564x/36/2c/85/362c85534a98650a29c12d683383e2db.jpg',
	},
}


//------------------------------BOT ON------------------------------
bot.on('ready', () => {
    console.log('Ready for Work!') //console response to the bot being online
    bot.user.setActivity('with you!');
})
//------------------------------MESSAGES------------------------------
bot.on('messageCreate', msg =>{
	//----VARIABLES----
	var idmsg = s => s.author.id === msg.author.id;
    //----CHECKING MGS----
    if(msg.author.bot) return; //avoid bot loop messages and commands

    if(msg.content === prefix + "Help" || msg.content === prefix + "help"){
        msg.reply({ embeds: [HelpEmbed] });
    }

    if(msg.content === prefix + "Hello" || msg.content === prefix + "hello"){
        msg.reply ("Hello Big Fella, How u doing?")
		.then(()=> {
			msg.channel.awaitMessages({filter: idmsg, max: 1})
			.then(msg =>{
			  	msg=msg.first();
			  	if (msg.content === 'Good' || msg.content === 'good'){
					msg.reply ("Nice, i'm hoping u stay that way 4ever ;)");
				}else if (msg.content === 'Bad' || msg.content === 'bad'){
					msg.reply ("Don't worry, it will get better soon, believe me :D");
				}else if (msg.content === 'Neither' || msg.content === 'neither'){
					msg.reply (":/");
				}
			})
		});
	}			
})
//------------------------------ICONS------------------------------
bot.on('messageCreate', msg =>{
    //----CHECKING MGS----
	if(msg.author.bot) return; //avoid bot loop messages and commands

	if (msg.content === prefix + "Members" || msg.content === prefix + "members"){
        msg.reply (`This Server have ${bot.guilds.cache.size} members in this moment`);
    }else if (msg.content === prefix + "Git" || msg.content === prefix + "git"){
        msg.reply ("GitHub account: https://github.com/Pereira3");
    }else if (msg.content === prefix + 'Icon' || msg.content === prefix + "icon"){
        return msg.reply(`<${msg.author.displayAvatarURL({ size: 2048, dynamic: true })}>`); 
    }else if (msg.content === prefix + 'ServerIcon' || msg.content === prefix + "servericon"){
        return msg.reply(`<${msg.guild.iconURL({ size: 2048, dynamic: true })}>`);
	}else if (msg.content === prefix + 'BotIcon' || msg.content === prefix + "boticon"){
        return msg.reply(`<${bot.user.displayAvatarURL({ size: 2048, dynamic: true })}>`);
	}
})
//------------------------------HELP------------------------------
bot.on('messageCreate', msg =>{
    //----CHECKING MGS----
    if(msg.author.bot) return; //avoid bot loop messages and commands

    if(msg.content === prefix + "Help" || msg.content === prefix + "help"){
        msg.reply({ embeds: [HelpEmbed] });
    }
})


bot.login(token); //take the token of the bot and put it online