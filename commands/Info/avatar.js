const { MessageEmbed } =require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Get user avatar with embed!',
    options: [
        {
            name: 'user',
            description: 'Mention user to get avatar!',
            type: 'USER',
            require: true
        }
    ],
    run: async (interaction, client) => {
        const member = interaction.options.getUser('user') || interaction.member;
        const embad = new MessageEmbed()
            .setTitle(`${member.user.tag}'s Avatar`, member.user.displayAcatarURL())
            .setThumbnail(member.user.displayAcatarURL({ dynamic: true, size: 2048 }))  
            .setFooter(`Requestes By: ${interaction.user.tag}`, interaction.user.displayAcatarURL());  

        interaction.reply({ embed: [embed] });
    }

}