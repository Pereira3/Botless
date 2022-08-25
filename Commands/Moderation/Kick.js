const {SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits, ComponentType} = require("discord.js");
const ms = require("ms")
/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kicks the member provided.")
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addUserOption((option) => 
            option
                .setName("target")
                .setDescription("The member you want to kick")
                .setRequired(true)
        )
        .addStringOption((option) => 
            option
                .setName("reason")
                .setDescription("The reason for kicking the member provided.")
        ),

    async execute(interaction, client) {

        const { guild, user } = interaction;

        let owner = await interaction.guild.fetchOwner()
        const Target = interaction.options.getUser("target")
        const Reason = interaction.options.getString("reason")
        if(Reason === null) Reason === ("No Reason Provided");
        let Targets = guild.members.cache.get(Target.id);
        Targets;

        const embed = new EmbedBuilder()

        if(Target.id === "1000359406376058981"){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("Why did you try to kick myself?\nWell... At least you tried :)")
            return interaction.reply({embeds:[embed]})
        }
        if(Target.id === user.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't kick yourself.")
            return interaction.reply({embeds:[embed]})
        }
        if(owner.user.id === Target.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't kick the Server's Owner.")
            return interaction.reply({embeds:[embed]})
        }
        if(guild.members.me.roles.highest.position <= Targets.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("I can't kick users with roles highest than me.")
            return interaction.reply({embeds:[embed]})
        }
        if(Targets.roles.highest.position >= interaction.member.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't kick users with roles highest than you.")
            return interaction.reply({embeds:[embed]})
        }

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('kick.yes')
                .setStyle(ButtonStyle.Danger)
                .setLabel('Yes')
                .setEmoji('✅'),
            new ButtonBuilder()
                .setCustomId('kick.no')
                .setStyle(ButtonStyle.Primary)
                .setLabel('No')
                .setEmoji('❌'),
        )

        const Page = interaction.reply({
            embeds: [embed.setDescription("Are you sure about kicking the user?").setColor(0xffffff)], components: [row],
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
                case ('kick.yes'): {
                    Targets.kick({Reason});
                    interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been kicked for:\n${Reason}`)], components: []})
                }
                break;
                case ('kick.no'):{
                    interaction.editReply({embeds: [embed.setTitle("🛑 Process Canceled").setDescription('The kick request was canceled.')], components: []})
                }
            }
        })
    }
}