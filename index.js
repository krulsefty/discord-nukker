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
        
        await guild.channels
            .create("CHANNEL_NAME", {        // "CHANNEL_NAME" is the name of channels that bot will create, you have to change all "CHANNEL_NAME"
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

        await message.channel.send(`@everyone YOUR MESSAGE`)        // "YOUR MESSAGE" is the message that bot will spam on command channel, you have to change all "YOUR MESSAGE"
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
