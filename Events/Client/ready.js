const {Client} = require("discord.js");
const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client
     */
    execute(client){
        console.log(`Client logged in as ${client.user.username}`);
        client.user.setActivity(` ${client.guilds.cache.size} Servers | My Prefix: *`, { type: ActivityType.Watching });
    },
};