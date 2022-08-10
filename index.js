const {Client, Collection} = require("discord.js");
const prefix = '*';
const client = new Client({intents: 3276797});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

client.commands = new Collection();
client.config = require("./config.json");

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
			value: 'The only prefix i have available until today is *\nI support Slash Commands and i listed them below.',
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
			value: 'ServerIcon/servericon - Gives you the icon of this Server\n(*Note: If the icon is a gif, it will only work correctly if you see it in your URL.*)',
			inline: false,
		},
		{
			name: 'Bot',
			value: 'BotIcon/boticon - Gives you my icon;\n(*Note: If the icon is a gif, it will only work correctly if you see it in your URL.*)',
			inline: false,
		},
		{
			name: 'For You',
			value: 'Icon/icon - Gives you the icon u are using in this moment;\n(*Note: If the icon is a gif, it will only work correctly if you see it in your URL.*)',
			inline: false,
		},
		{ //Take Space between the first Field and the Others
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Slash Profile',
			value: '/profile - Gives u your account informations',
			inline: false,
		},
		{
			name: 'Slash Server Info',
			value: '/serverinfo - Gives u your currently server informations',
			inline: false,
		},
		{
			name: 'Slash GitHub',
			value: '/git - Gives u my creator github account and my folders and files that were necessary to create me as u see nowadays',
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
//------------------------------MESSAGES------------------------------
client.on('messageCreate', msg =>{
	//----VARIABLES----
	var idmsg = s => s.author.id === msg.author.id;
    //----CHECKING MGS----
    if(msg.author.bot) return; //avoid bot loop messages and commands

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
client.on('messageCreate', msg =>{
    //----CHECKING MGS----
	if(msg.author.bot) return; //avoid bot loop messages and commands

	if (msg.content === prefix + 'Icon' || msg.content === prefix + "icon"){
        msg.reply(`IconURL with full resolution: (<${msg.author.displayAvatarURL({ size: 2048, dynamic: true })}>)`);
		msg.channel.send(`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`);
    }else if (msg.content === prefix + 'ServerIcon' || msg.content === prefix + "servericon"){
        msg.reply(`IconURL with full resolution: (<${msg.guild.iconURL({ size: 2048, dynamic: true })}>)`);
		msg.channel.send(`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}`);
	}else if (msg.content === prefix + 'BotIcon' || msg.content === prefix + "boticon"){
		msg.reply(`IconURL with full resolution: (<${client.user.displayAvatarURL({ size: 2048, dynamic: true })}>)`);
		msg.channel.send(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`);
	}
})
//------------------------------HELP------------------------------
client.on('messageCreate', msg =>{
    //----CHECKING MGS----
    if(msg.author.bot) return; //avoid bot loop messages and commands

    if(msg.content === prefix + "Help" || msg.content === prefix + "help"){
        msg.reply({ embeds: [HelpEmbed] });
    }//else if (msg.content === prefix + 'Profile' || msg.content === prefix + 'profile'){}
})

client.login(client.config.token).then(() => {
	loadEvents(client);
	loadCommands(client);
}).catch((err) => console.log(err));//take the token of the bot and put it online