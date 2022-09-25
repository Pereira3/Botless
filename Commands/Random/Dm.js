const { EmbedBuilder, SlashCommandBuilder, Client, CommandInteraction} = require("discord.js")
const Discord = require("discord.js")

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dm")
    .setDescription("Nothing to do here")
    .setDMPermission(false)
    .addUserOption((option) => 
        option
            .setName("target")
            .setDescription("The member you want to kick")
            .setRequired(true)
    )
    .addStringOption((options) => 
        options
            .setName("title")
            .setDescription("title")
            .setRequired(true)
    )
    .addStringOption((options) => 
        options
            .setName("message")
            .setDescription("message")
            .setRequired(true)
    ),

    async execute(interaction, client){

        const embed = new EmbedBuilder()
        const Embed = new EmbedBuilder()

        const Title = interaction.options.getString("title")
        const Message = interaction.options.getString("message")
        const Target = interaction.options.getUser("target")

        if(!interaction.user.id === "295596122460782604"){
            interaction.reply("You don't have permissions to use this command.")
        } else {
            Embed.setColor("Random")
            Embed.setTitle(`${Title}`)
            Embed.setDescription(`${Message}`)
            Embed.setThumbnail(`${client.user.displayAvatarURL()}`)
            Embed.setTimestamp(Date.now())
            Target.send({embeds: [Embed]})
            
            interaction.reply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`**${Target.username}** got your message.`)]})
            setTimeout( () => {
                interaction.deleteReply()
            }, 7 * 1000) //7 seconds, 7000 ms
        }
    }
}