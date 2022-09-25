const Discord = require('discord.js')
const { SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, PermissionFlagsBits } = require('discord.js')

const ms = require("ms")

/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Delete messages from a text channel.")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption((options) =>
            options
                .setName("target")
                .setDescription("User you want to delete the messages.")
                .setRequired(true)
        ),

    async execute(interaction) {

        const Target = interaction.options.getUser("target")

        const embed = new EmbedBuilder()
        const messages = await interaction.channel.messages.fetch({})
        const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 days") && msg.author.id === Target.id)
    
        interaction.channel.bulkDelete(filtered)
        embed.setTitle("✅ Processed Correctly")
        embed.setColor(0xffffff)
        embed.setDescription(`Messages sent by ${Target.username} to ${interaction.channel} have been deleted by ${interaction.user.username}.\n*Can't delete messages sent more than 14 days ago.*`)
        interaction.reply({ embeds: [embed] })
    
        setTimeout( () => {
            interaction.deleteReply()
        }, 7 * 1000) //7 seconds, 7000 ms
    }
}