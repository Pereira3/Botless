const {Client, Collection} = require("discord.js");
const prefix = '*';
const client = new Client({intents: 3276797});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

client.events = new Collection();
client.commands = new Collection();
client.config = require("./config.json");

//------------------------------SIMPLE MESSAGES------------------------------
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

client.login(client.config.token).then(() => {
	loadEvents(client);
	loadCommands(client);
}).catch((err) => console.log(err));//take the token of the bot and put it online