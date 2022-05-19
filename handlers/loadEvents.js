const { readdirSync } = require('fs');

module.exports = (client) => { 
    const loadcommand = dirs =>{
        const eveuts = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of eveuts) {
            const evt = require(`../events/${dirs}/${file}`);
            const eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
        }
    };
    ["client", "guild"].forEach((x) => loadcommand(x));
};