const {SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits, ComponentType, ChannelType} = require("discord.js");
const ms = require("ms")
/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("message")
        .setDMPermission(false)
        .setDescription("The bot sends the message you want to the channel you want.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addChannelOption((option) => 
            option
                .addChannelTypes(ChannelType.GuildText)
                .setName("channel")
                .setDescription("The channel you want to send the message.")
                .setRequired(true)
        )
        .addStringOption((option) => 
            option
                .setName("title")
                .setDescription("Choose the title you want to the message you want to send.")
                .setRequired(true)
        )
        
        .addStringOption((option) => 
            option
                .setName("message")
                .setDescription("The message you want to send.")
                .setRequired(true)
        ),

    async execute(interaction, client) {
        
        const { user } = interaction;

        const Channel = interaction.options.getChannel("channel")
        const Message = interaction.options.getString("message")
        const Title = interaction.options.getString("title")

        const embed = new EmbedBuilder()

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('msg.yes')
                .setStyle(ButtonStyle.Danger)
                .setLabel('Yes')
                .setEmoji('✅'),
            new ButtonBuilder()
                .setCustomId('msg.no')
                .setStyle(ButtonStyle.Primary)
                .setLabel('No')
                .setEmoji('❌'),
        )

        const Page = interaction.reply({
            embeds: [embed.setDescription(`Are you sure about sending the message to ${Channel}?`).setColor(0xffffff)], components: [row],
        });

        const collect = await (
            await Page
        ).createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: ms('15s'),
        })

        collect.on('collect', (i) => {
            if(i.user.id != user.id) return;
            switch(i.customId){
                case ('msg.yes'): {
                    Channel.send({embeds: [embed
                        .setColor(0xffffff)
                        .setTitle(`${Title}`)
                        .setDescription(`${Message}`)
                        .setTimestamp(Date.now())
                        .setFooter({
                            iconURL: client.user.displayAvatarURL(),
                            text: client.user.username
                        }),
                    ]})
                    interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`Message has been sent without any problem.`)], components: []})
                }
                break;
                case ('msg.no'):{
                    interaction.editReply({embeds: [embed.setTitle("🛑 Process Canceled").setDescription('The message request was canceled.')], components: []})
                }
                break;
            }
        })
        collect.on('end', (collected) => {
            if(collected.size > 0) return;
            interaction.editReply({
                embeds:[embed.setTitle("⌛ Times up").setDescription("You took too long, the process was cancelled.")], components: []
            })
        })
    }
}