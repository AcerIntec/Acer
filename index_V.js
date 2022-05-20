const { Client, Intents, Collection } =require('discord.js');
const { TOKEN } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.slash = new Collection();
client.commands = new Collection();
client.aliases = new Collection();

["loadEvents", "loadCommands"]
    .forEach(file => {
        require(`./handlers/${file}`)(client);
});

client.login(TOKEN);    
