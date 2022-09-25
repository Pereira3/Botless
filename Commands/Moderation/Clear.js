const Discord = require('discord.js')
const { SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, PermissionFlagsBits} = require('discord.js')

const ms = require("ms")

/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Delete messages from a text channel.")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addIntegerOption((options) =>
            options
                .setName("number")
                .setDescription("How many messages you want to delete?")
                .setRequired(true)
        ),

    async execute(interaction) {

        const Number = interaction.options.getInteger("number")
        const embed = new EmbedBuilder()

        if (parseInt(Number) > 100 || parseInt(Number) <= 0) {
                embed.setTitle("❌ Error"),
                embed.setColor(0xffffff),
                embed.setDescription("You have to enter a number between 0-100.")
            return interaction.reply({ embeds: [embed] })
        } else {

            const messages = await interaction.channel.messages.fetch({
                limit: Number,
            })
            const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 days"))

            interaction.channel.bulkDelete(filtered)
            embed.setTitle("✅ Processed Correctly")
            embed.setColor(0xffffff)
            embed.setDescription(`The channel ${interaction.channel} had ${Number} messages deleted by ${interaction.user.username}.\n*Can't delete messages sent more than 14 days ago.*`)
            interaction.reply({ embeds: [embed] })

            setTimeout( () => {
                interaction.deleteReply()
            }, 7 * 1000) //7 seconds, 7000 ms
        }
    }
}