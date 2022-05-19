const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Reply with pong!',

    run: async (integration, client) => {
        const embad = new MessageEmbed()
            .setTitle(`Pong!`)
            .setColor("GREEN") 
            .setFooter(integration.user.get, integration.user.displayAvatarURL());

         integration.reply({ embads: [embad], ephemeral: false });   
    }
}