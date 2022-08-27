const {SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits, ComponentType} = require("discord.js");
const ms = require("ms")
/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban the member you provided.")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption((option) => 
            option
                .setName("target")
                .setDescription("The member you want to ban")
                .setRequired(true)
        )
        .addStringOption((option) => 
            option
                .setName("reason")
                .setDescription("The reason for baning the member provided.")
                .setRequired(true)
        ),

    async execute(interaction, client) {

        if(interaction.guild === null) return interaction.user.send("Command only available in Servers."); //ignore DM messages

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
            embed.setDescription("Why did you try to ban myself?\nWell... At least you tried :)")
            return interaction.reply({embeds:[embed]})
        }
        if(Target.id === user.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't ban yourself.")
            return interaction.reply({embeds:[embed]})
        }
        if(owner.user.id === Target.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't ban the Server's Owner.")
            return interaction.reply({embeds:[embed]})
        }
        if(guild.members.me.roles.highest.position <= Targets.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("I can't ban users with roles highest than me.")
            return interaction.reply({embeds:[embed]})
        }
        if(Targets.roles.highest.position >= interaction.member.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't ban users with roles highest than you.")
            return interaction.reply({embeds:[embed]})
        }

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('ban.yes')
                .setStyle(ButtonStyle.Danger)
                .setLabel('Yes')
                .setEmoji('✅'),
            new ButtonBuilder()
                .setCustomId('ban.no')
                .setStyle(ButtonStyle.Primary)
                .setLabel('No')
                .setEmoji('❌'),
        )

        const Page = interaction.reply({
            embeds: [embed.setDescription(`Are you sure about baning ${Targets.user.tag}?`).setColor(0xffffff)], components: [row],
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
                case ('ban.yes'): {
                    Target.send({content: `You have been banned from **${guild.name}** by **${interaction.member.user.username}** for:\n**${Reason}**`})
                    Targets.ban({Reason});
                    interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been banned for:\n**${Reason}**`)], components: []})
                }
                break;
                case ('ban.no'):{
                    interaction.editReply({embeds: [embed.setTitle("🛑 Process Canceled").setDescription('The ban request was canceled.')], components: []})
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