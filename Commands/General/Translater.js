const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, Client } = require("discord.js");

const translate = require("translate-google");
const ISO6391 = require("iso-639-1");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("translate")
        .setDescription("Translate your Text")
        .addStringOption((options) =>
            options
                .setName("text")
                .setDescription("Text you want to Translate.")
                .setRequired(true)
        )
        .addStringOption((uwagi) =>
            uwagi
                .setName("fromlanguage")
                .setDescription("Language you will use.")
                .setRequired(true)
        )
        .addStringOption((uwagi) =>
            uwagi
                .setName("tolanguage")
                .setDescription("Language you want the text translated into.")
                .setRequired(true)
        ),

    /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */

    async execute(interaction, client) {
        const text = interaction.options.getString("text");
        const fromlanguage = interaction.options.getString("fromlanguage");
        const tolanguage = interaction.options.getString("tolanguage");
        translate(text, { from: fromlanguage, to: tolanguage })
            .then((result) => {
                const fromlanguageName = ISO6391.getName(fromlanguage) || fromlanguage;
                const tolanguageName = ISO6391.getName(tolanguage) || tolanguage;
                const Embed = new EmbedBuilder()
                    .setColor(0xffffff)
                    .setTitle(
                        `Translated from ${fromlanguageName} into ${tolanguageName}`
                    )
                    .addFields(
                        {
                            name: `Your text:`,
                            value: `${text}`,
                        },
                        {
                            name: `Translated text:`,
                            value: `${result}`,
                        }
                    )
                    .setTimestamp(Date.now())
                    .setFooter({
                        iconURL: client.user.displayAvatarURL(),
                        text: client.user.username,
                    });
                interaction.reply({ embeds: [Embed] });
            })
            .catch((err) => {
                console.error(err);
            });
    },
};