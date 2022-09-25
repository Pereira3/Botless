const { EmbedBuilder, SlashCommandBuilder, CommandInteraction} = require("discord.js")

/**
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Lets bet if you will get face or crown ...")
    .setDMPermission(false)
    .addStringOption((option) => 
        option
            .setName("choice")
            .setDescription("Chose the side you want.")
            .setRequired(true)
            .addChoices(
                {name: "Face", value: "face"},
                {name: "Crown", value: "crown"}
        )
    ),
    async execute(interaction){
        const embed = new EmbedBuilder()
        const side = interaction.options.getString("choice")

        let sides = ["face", "crown"]
        let result = sides[Math.floor(Math.random()*sides.length)];

        embed.setColor(0xffffff)
        embed.setTitle("🪙 Fliping the coin ...")
        embed.setDescription("Waiting for the coin to drop ...")
        embed.setThumbnail("https://i.pinimg.com/originals/d7/49/06/d74906d39a1964e7d07555e7601b06ad.gif")
        interaction.reply({embeds: [embed]})

        setTimeout( () => {

            if(side === "face" && result === "face"){
                embed.setColor(0xffffff)
                embed.setTitle("🍀 You won")
                embed.setDescription(`Congratulations ${interaction.user.username},\nThe coin was turned with the 🗿 side up.`)
                embed.setThumbnail("https://c.tenor.com/qV58jwdr3S0AAAAM/tuzuki-usagi.gif")
                return interaction.editReply({embeds: [embed]})
            }else if(side === "crown" && result === "crown"){
                embed.setColor(0xffffff)
                embed.setTitle("🍀 You won")
                embed.setDescription(`Congratulations ${interaction.user.username},\nThe coin was turned with the 👑 side up.`)
                embed.setThumbnail("https://c.tenor.com/qV58jwdr3S0AAAAM/tuzuki-usagi.gif")
                return interaction.editReply({embeds: [embed]})
            }else if(side === "crown" && result === "face" || side === "face" && result === "crown"){
                embed.setColor(0xffffff)
                embed.setTitle("❌ You lost")
                embed.setDescription("Looks like you got it wrong this time.\nYou chose the wrong side, better luck next time.")
                embed.setThumbnail("https://c.tenor.com/ixidPbZQ4AwAAAAM/tuzuki-usagi.gif")
                return interaction.editReply({embeds: [embed]})
            }else{

            }
        }, 3 * 1000)
    }
}