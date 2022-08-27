const {SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits, ComponentType, time} = require("discord.js");
const ms = require("ms")
/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Timeout the member you provided.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption((option) => 
            option
                .setName("target")
                .setDescription("The member you want to timeout")
                .setRequired(true)
        )
        .addStringOption((option) => 
            option
                .setName("reason")
                .setDescription("The reason for timeout the member provided.")
                .setRequired(true)
        )
        .addStringOption((option) => 
            option
                .setName("duration")
                .setDescription("The timeout duration.")
                .setRequired(true)
                .addChoices(
                    { name: '30 Seconds', value: '30 Seconds'},
                    { name: '60 Seconds', value: '60 Seconds'},
                    { name: '5 Minutes', value: '5 Minutes'},
                    { name: '10 Minutes', value: '10 Minutes'},
                    { name: '30 Minutes', value: '30 Minutes'},
                    { name: '1 Hour', value: '1 Hour'},
                    { name: '1 Day', value: '1 Day'},
                    { name: '1 Week', value: '1 Week'},
                )
        ),

    async execute(interaction, client) {

        if(interaction.guild === null) return interaction.user.send("Command only available in Servers."); //ignore DM messages
        
        const { guild, user } = interaction;

        const timeouttime = interaction.options.getString("duration")

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
            embed.setDescription("Why did you try to timeout myself?\nWell... At least you tried :)")
            return interaction.reply({embeds:[embed]})
        }
        if(Target.id === user.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't timeout yourself.")
            return interaction.reply({embeds:[embed]})
        }
        if(owner.user.id === Target.id){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't timeout the Server's Owner.")
            return interaction.reply({embeds:[embed]})
        }
        if(guild.members.me.roles.highest.position <= Targets.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("I can't timeout users with roles highest than me.")
            return interaction.reply({embeds:[embed]})
        }
        if(Targets.roles.highest.position >= interaction.member.roles.highest.position){
            embed.setTitle("❌ Error"),
            embed.setColor(0xffffff),
            embed.setDescription("You can't timeout users with roles highest than you.")
            return interaction.reply({embeds:[embed]})
        }

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('timeout.yes')
                .setStyle(ButtonStyle.Danger)
                .setLabel('Yes')
                .setEmoji('✅'),
            new ButtonBuilder()
                .setCustomId('timeout.no')
                .setStyle(ButtonStyle.Primary)
                .setLabel('No')
                .setEmoji('❌'),
        )

        const Page = interaction.reply({
            embeds: [embed.setDescription(`Are you sure about timeout ${Targets.user.tag}?`).setColor(0xffffff)], components: [row],
        });

        const collect = await (
            await Page
        ).createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: ms('10s'),
        })

        collect.on('collect', (i) => {
            if(i.user.id != user.id) return;
            switch(i.customId){
                case ('timeout.yes'): {
                    if(timeouttime === '30 Seconds'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('30s'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n**${Reason}**`)], components: []})
                    }
                    if(timeouttime === '60 Seconds'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('60s'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '5 Minutes'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('5m'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '10 Minutes'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('10m'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '30 Minutes'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('30m'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '1 Hour'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('1h'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '1 Day'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('1d'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                    if(timeouttime === '1 Week'){
                        Target.send({content: `You have been timed out from **${guild.name}** for **${Reason}** by **${interaction.member.user.username}**`})
                        Targets.timeout(ms('1w'), Reason);
                        interaction.editReply({embeds: [embed.setTitle("✅ Processed Correctly").setDescription(`${Targets.user.username} has been timed out for:\n${Reason}`)], components: []})
                    }
                }
                break;
                case ('timeout.no'):{
                    interaction.editReply({embeds: [embed.setTitle("🛑 Process Canceled").setDescription('The timeout request was canceled.')], components: []})
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