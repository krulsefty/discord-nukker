// sefty#001
// MAKE SURE TO CHANGE "CHANNEL_NAME" AND "YOUR MESSAGE"

const Discord = require("discord.js")

const { TOKEN } = require("./config.js")

const client = new Discord.Client()

client.on("ready", () => {
    console.log("Bot is online")
})

client.on("message", async message => {
    const msg = message.content.toLowerCase()
    const args = message.content.trim().split(/ +/g);
    const guild = client.guilds.cache.get("1028708917196370042");

    if (msg == "nuke") {
        
        await guild.channels
            .create("CHANNEL_NAME", {        // "CHANNEL_NAME" is the name of channels that bot will create
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await guild.channels
            .create("CHANNEL_NAME", {
                type: "text",
            })

        await message.channel.send(`@everyone YOUR MESSAGE`)        // "YOUR MESSAGE" is the message that bot will spam on command channel
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
        await message.channel.send(`@everyone YOUR MESSAGE`)
    }
})

client.login(TOKEN)

client.on("debug", () => { })
client.on("warn", () => { })
client.on("error", () => { })
