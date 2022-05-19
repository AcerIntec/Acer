module.exports = (client) => {
    console.log(`[INFOMATION] ${client.user.tag} - Ready!`);
    client.user.setActivity("/help - Example", { try: "PLAYING" });
};