const { SlashCommandBuilder, EmbedBuilder, Client, CommandInteraction } = require('discord.js');
const moment = require('moment');

/**
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("Display server's information"),

    async execute(interaction, client) {
        let owner = await interaction.guild.fetchOwner()

        const ServerInfoEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(`${interaction.guild.name} Info`)
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addFields(
                { name: 'Name:', value: `${interaction.guild.name}` },
                { name: 'ID:', value: `${interaction.guild.id}` },
                { name: 'Owner:', value: `${owner.user.username}` },
                { name: 'Member Count:', value: `${interaction.guild.memberCount}`},
                { name: 'Created In:', value: `${moment(interaction.guild.createdAt).format('hh:mm:ss a')}\n${moment(interaction.guild.createdAt).format('Do MMMM YYYY')}\n${moment(interaction.guild.createdAt).startOf('day').fromNow()}`},
            )
            .setTimestamp(Date.now())
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
        await interaction.reply({ embeds: [ServerInfoEmbed] });
    }

}


/*module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Display server's information"),

    async execute(client, interaction){
        //const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        //const members = interaction.guild.members.cache;
        //const channels = interaction.guild.channels.cache;
        //const emojis = interaction.guild.emojis.cache;

        const ServerInfoEmbed = new EmbedBuilder()
            .setDescription(`**Server Info**`)
            .setColor(0xffffff)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('General', [
                `**Name:** ${interaction.guild.name}`,
                `**ID:** ${interaction.guild.id}`,
                `**Owner:** ${interaction.guild.owner.user.tag} (${interaction.guild.ownerID})`,
                `**Region:** ${regions[interaction.guild.region]}`,
                `**Boost Tier:** ${interaction.guild.premiumTier ? `Tier ${interaction.guild.premiumTier}` : 'None'}`,
                `**Explicit Filter:** ${filterLevels[interaction.guild.explicitContentFilter]}`,
                `**Verification Level:** ${verificationLevels[interaction.guild.verificationLevel]}`,
                `**Time Created:** ${moment(interaction.guild.createdTimestamp).format('LT')} ${moment(interaction.guild.createdTimestamp).format('LL')} [${moment(interaction.guild.createdTimestamp).fromNow()}]`,
                '\u200b'
            ])
            .addField('Statistics', [
                `**Role Count:** ${roles.length}`,
                `**Emoji Count:** ${emojis.size}`,
                `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                `**Member Count:** ${interaction.guild.memberCount}`,
                `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**Bots:** ${members.filter(member => member.user.bot).size}`,
                `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                `**Boost Count:** ${interaction.guild.premiumSubscriptionCount || '0'}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                '\u200b'
            ])
            .addField(`Roles [${roles.length - 1}]`, roles.join(', '))
    
            .setTimestamp(Date.now());
        await interaction.reply({ embeds: [ServerInfoEmbed] });
    }

}*/