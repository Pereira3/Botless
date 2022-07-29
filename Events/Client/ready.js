const { Client } = require ("discord.js");

module.exports = {
    name: "ready",
    once: true,
    /** 
     * 
     * @param {Client} client
    */
    execute(client){
        console.log(`Client is now logged in as ${client.user.username}`);
        client.user.setActivity('with you!');
    }
}