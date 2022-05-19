const { MessageEmbed } = require('discord.js');
const { OWNER_ID } = require('../../config.json');

module.exports = async(client, integration) => {
    if (integration.isCommand()) {
        if (!client.slash.has(integration.commandName)) return;
        if (!integration.guild) return;
        const command = client.slash.get(integration.commandName);

        try {
            if (command.permission) {
                if (!integration.member.hasPermission(command.permission)) {
                    const embad = new MessageEmbed ()
                        .setTitle(`Access Denied`)
                        .setColor("RED")
                        .setDescription(`you don't have perm ${command.permissions} to ues this command!`)
                        .setFooter(integration.user.tag, integration.user.displayAvatarURL());

                    return integration.reply({ embads: [embad] });   
                }
            }

            if (command.ownerOnly) {
                if (integration.user.id !== OWNER_ID) {
                    const embad = new MessageEmbed()
                        .setTitle(`Access Denied`)
                        .setColor("RED")
                        .setDescription(`you not owner the bot can't use this command!`)
                        .setFooter(integration.user.tag, integration.user.displayAvatarURL());

                    return integration.reply({ embads: [embad] });   
                }
            }
            command.run(integration, client);

        } catch (e) {
            console.log(e)
            await integration.reply({ content: "Something went wrong!", ephemer: true });
        }
    }
}