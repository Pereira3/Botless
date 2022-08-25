const { CommandInteraction, EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("actions")
        .setDescription("Gives you the action from an option that you want")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription("Select an Option")
                .setRequired(true)
                .addChoices(
                    { name: "Wink", value: "wink" },
                    { name: "Pat", value: "pat" },
                    { name: "Hug", value: "hug" },
                )
        )
        .addUserOption((option) => 
        option
            .setName("target")
            .setDescription("The member you want to mention")
            .setRequired(true)
        ),

    async execute(interaction, client) {
        const { guild, options } = interaction;
        const choice = options.getString("name")
        const Target = interaction.options.getUser("target")
        let Targets = guild.members.cache.get(Target.id);
        Targets;

        let url = `https://some-random-api.ml/animu/${choice}/`;

        let data, response;

        try {
            if(choice === "wink"){
                response = await axios.get(url);
                data = response.data;
                const animu = new EmbedBuilder()
                .setColor(0xffffff)
                    .setTitle(`${interaction.user.username} is ${choice}ing to ${Targets.user.username}`)
                    .setTimestamp(Date.now())
                    .setImage(data.link)
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username
                    })
                await interaction.reply({ embeds: [animu]})
            }else if(choice === "hug"){
                response = await axios.get(url);
                data = response.data;
                const animu = new EmbedBuilder()
                .setColor(0xffffff)
                    .setTitle(`${interaction.user.username} is ${choice}ing ${Targets.user.username}.`)
                    .setTimestamp(Date.now())
                    .setImage(data.link)
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username
                    })
                await interaction.reply({ embeds: [animu]})
            }else if(choice === "pat"){
                response = await axios.get(url);
                data = response.data;
                const animu = new EmbedBuilder()
                .setColor(0xffffff)
                    .setTitle(`${interaction.user.username} is ${choice}ing ${Targets.user.username}`)
                    .setTimestamp(Date.now())
                    .setImage(data.link)
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username
                    })
                await interaction.reply({ embeds: [animu]})
            }
        } catch (e) {
            return interaction.reply({ content: `An error occured, please try again!`, ephemeral: true });
        }

    }
}