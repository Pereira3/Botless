const Discord = require('discord.js')
const { SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder } = require('discord.js')

const ms = require("ms")

/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Delete messages from a text channel.")
        .addUserOption((options) =>
            options
                .setName("target")
                .setDescription("User you want to delete the messages.")
                .setRequired(true)
        ),

    async execute(interaction) {

        if (interaction.guild === null) return interaction.user.send("Command only available in Servers."); //ignore DM messages

        const Target = interaction.options.getUser("target")

        const embed = new EmbedBuilder()

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
            embed.setTitle("❌ Error"),
                embed.setColor(0xffffff),
                embed.setDescription("You don't have permissions to use this command.")
            return interaction.reply({ embeds: [embed] })
        } else {

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
}