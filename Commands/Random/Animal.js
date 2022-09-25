const { CommandInteraction, EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("animal")
        .setDMPermission(false)
        .setDescription("Gives you a picture of a animal.")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription("Name of the animal")
                .setRequired(true)
                .addChoices(
                    { name: "Panda", value: "panda" },
                    { name: "Dog", value: "dog" },
                    { name: "Cat", value: "cat" },
                    { name: "Fox", value: "fox" },
                    { name: "Red Panda", value: "red_panda" },
                    { name: "Koala", value: "koala" },
                    { name: "Birb", value: "birb" },
                    { name: "Raccoon", value: "raccoon" },
                    { name: "Kangaroo", value: "kangaroo" },
                    { name: "Whale", value: "whale" },
                )
        )
        .addStringOption((option) =>
            option
                .setName("choices")
                .setDescription("Select an Option")
                .setRequired(true)
                .addChoices(
                    { name: "Facts", value: "facts" },
                    { name: "Image", value: "img" },
                )
        ),

    async execute(interaction, client) {
        const { options } = interaction;
        const animalName = options.getString("name")
        const choice = options.getString("choices")

        let url = `https://some-random-api.ml/${choice}/${animalName}/`;

        let data, response;

        try {
            if (choice === "img") {
                response = await axios.get(url);
                data = response.data;
                const animals = new EmbedBuilder()
                    .setColor(0xffffff)
                    .setTitle(`Random ${animalName} Image`)
                    .setImage(data.link)
                    .setTimestamp(Date.now())
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username
                    })
                await interaction.reply({ embeds: [animals] })
            } else if (choice === "facts") {
                response = await axios.get(url);
                data = response.data;
                const animals = new EmbedBuilder()
                    .setColor(0xffffff)
                    .setTitle(`Random ${animalName} Fact:\n`)
                    .setDescription(data.fact)
                    .setTimestamp(Date.now())
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username
                    })
                await interaction.reply({ embeds: [animals] })
            }

        } catch (e) {
            return interaction.reply({ content: `An error occured, please try again!`, ephemeral: true });
        }

    }
}