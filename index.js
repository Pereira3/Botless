const {token} = require("./tkn.json");
const prefix = '-';
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () =>{
    console.log("Ready for Work!")
});

client.login(token);