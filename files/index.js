/// sefty
// sefty
/// sefty

const { Client } = require("discord.js")
const client = new Client()
const readline = require("readline")
const chalk = require('chalk')

let token = null
let guildId = null
let action = null
let guildsList = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptPassword(query) {
  return new Promise((resolve, reject) => {
    rl.stdoutMuted = true
    rl.question(query, (input) => {
      rl.stdoutMuted = false
      console.log()
      resolve(input)
    })

    rl._writeToOutput = function(char) {
      if (rl.stdoutMuted) rl.output.write('*')
      else rl.output.write(char)
    }
  })
}

async function getInput() {
  token = await promptPassword('\nenter your discord bot token:\n\n')

  console.log("\ntoken received", chalk.green('successfully'))

  client.login(token)

  client.once('ready', () => {
    displayGuilds()
  })
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function displayGuilds() {
  console.clear()
  guildsList = client.guilds.cache.array()
  if (guildsList.length === 0) {
    console.log("\nno guilds available")
    rl.close()
    return
  }

  console.log("\navailable guilds:\n")
  guildsList.forEach((guild, index) => {
    console.log(chalk.yellow("["), `${index + 1}`, chalk.yellow("]"), `${guild.name}`)
  })

  rl.question("\nselect a guild by number: ", (answer) => {
    const selectedGuildNumber = parseInt(answer.trim())

    if (selectedGuildNumber < 1 || selectedGuildNumber > guildsList.length) {
      console.log("\ninvalid selection. choose a valid guild number.")
      displayGuilds()
    } else {
      guildId = guildsList[selectedGuildNumber - 1].id
      askForAction()
    }
  })
}

function askForAction() {
  console.clear();
  console.log("\nselect an action:\n")
  console.log(chalk.yellow("["), "1", chalk.yellow("]"), "display members")
  console.log(chalk.yellow("["), "2", chalk.yellow("]"), "display channels")
  console.log(chalk.yellow("["), "3", chalk.yellow("]"), "create invite link")
  console.log(chalk.yellow("["), "4", chalk.yellow("]"), "create channels")
  console.log(chalk.yellow("["), "5", chalk.yellow("]"), "ban users")
  console.log(chalk.yellow("["), "6", chalk.yellow("]"), "spam channels")
  console.log(chalk.yellow("["), "7", chalk.yellow("]"), "delete channels")
  console.log(chalk.yellow("["), "8", chalk.yellow("]"), "give admin")
  console.log(chalk.yellow("["), "9", chalk.yellow("]"), "exit")

  rl.question("\nenter an action number: ", (answer) => {
    action = answer.trim()

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(action)) {
      performAction()
    } else {
      console.log("\ninvalid action")
      askForAction()
    }
  })
}

async function performAction() {
  console.clear();
  switch (action) {
    case '1':
      await displayMembers(guildId)
      break
    case '2':
      await displayChannels(guildId)
      break
    case '3':
      await createInviteLink(guildId)
      break
    case '4':
      const channelName = await getChannelName()
      const channelCount = await getChannelCount()
      await createMultipleChannels(guildId, channelName, channelCount)
      break
    case '5':
      await banUsers(guildId)
      break
    case '6':
      const messageCount = await getMessageCount()
      await spamChannels(guildId, messageCount)
      break
    case '7':
      await delChannels(guildId)
      break
    case '8':
      const userId = await getUserId()
      await giveAdmin(guildId, userId)
      break
    case '9':
      console.log("\nexiting...\n")
      rl.close()
      process.exit(0)
      break;
    default:
      console.log('\ninvalid action')
      break;
  }

  waitForUserToContinue()
}

async function createMultipleChannels(guildId, baseChannelName, count) {
  try {
    const guild = await client.guilds.fetch(guildId)
    
    for (let i = 1; i <= count; i++) {
      const channelName = `${baseChannelName}`
      await guild.channels.create(channelName, {
        type: 'text',
      })
      console.log(`\ncreated channel: ${channelName}`)
    }
  } catch (error) {
    console.error("\nerror creating channels", error)
  }
}

function getChannelName() {
  return new Promise((resolve) => {
    rl.question("\nenter the channel name: ", (channelName) => {
      resolve(channelName)
    })
  })
}

function getChannelCount() {
  return new Promise((resolve) => {
    rl.question("\nenter count of channels: ", (channelCount) => {
      resolve(channelCount)
    })
  })
}

function getUserId() {
  return new Promise((resolve) => {
    rl.question("\nenter your discord id: ", (userId) => {
      resolve(userId)
    })
  })
}

function getMessageCount() {
  return new Promise((resolve) => {
    rl.question("\nenter amount of messages to be send: ", (messageCount) => {
      resolve(messageCount)
    })
  })
}

function displayMembers(guildId) {
  const guild = client.guilds.cache.get(guildId)
  if (!guild) {
    console.log(`\nguild with ID ${guildId} not found.`)
    return
  }
  const members = guild.members.cache.array()
  const memberIds = members.map((member) => `${member.user.username} - ${member.user.id}`)
  console.log(chalk.magenta(`\nmembers list:`), `\n\n${memberIds.join("\n")}`)
}

function displayChannels(guildId) {
  const guild = client.guilds.cache.get(guildId)
  if (!guild) {
    console.log(`\nguild with ID ${guildId} not found.`)
    return
  }
  const channels = guild.channels.cache.array()
  channels.forEach(channel => {
    console.log(`\nname:`, chalk.cyan(`${channel.name}`))
    console.log(`id:`, chalk.cyan(`${channel.id}`))
    console.log(`type:`, chalk.cyan(`${channel.type}`))
  })
}

async function createInviteLink(guildId) {
  try {
    const guild = await client.guilds.fetch(guildId)
    const channels = guild.channels.cache.filter(c => c.isText())
    const randomChannel = channels.random()

    if (!randomChannel) {
      console.log("\nno text channels available.")
      return
    }

    const invite = await randomChannel.createInvite({
      maxAge: 0,
      maxUses: 0,
      unique: true,
    });

    console.log(`\ninvite link:`, chalk.blueBright(`https://discord.gg/${invite.code}`))
    return `https://discord.gg/${invite.code}`
  } catch (error) {
    console.error("\nerror creating invite:", error)
  }
}

async function createChannel(guildId, channelName) {
  try {
    const guild = await client.guilds.fetch(guildId)
    await guild.channels.create(channelName, {
      type: "text",
    });
    console.log(`created channel: ${channelName}`)
  } catch (error) {
    console.error("\nerror creating channel:", error)
  }
}

async function banUsers(guildId) {
  try {
    const guild = await client.guilds.fetch(guildId)
    const members = guild.members.cache.filter((member) => member.bannable)
    
    for (const member of members.values()) {
      await member.ban();
      console.log(`banned user: ${member.user.tag}`);
    }
  } catch (error) {
    console.error("\nerror banning users:", error);
  }
}

async function spamChannels(guildId, messageCount) {
  const messageContent = "@everyone"
  const guild = await client.guilds.fetch(guildId)
  const channels = guild.channels.cache.filter(c => c.isText())
  
  for (const channel of channels.values()) {
    const numMessages = messageCount
    const delayRange = 20
    
    for (let i = 0; i < numMessages; i++) {
      setTimeout(() => {
        channel.send(messageContent).catch(error => {
          console.error(`\nunable to send message to channel ${channel.id}: ${error}`)
        })
      }, i * delayRange + Math.random() * delayRange * 2)
    }
  }
}

async function delChannels(guildId) {
  try {
    const guild = await client.guilds.fetch(guildId)
    const channels = guild.channels.cache

    for (const channel of channels.values()) {
      await channel.delete()
      console.log(`deleted channel: ${channel.name}`)
    }
  } catch (error) {
    console.error("\nerror deleting channels:", error)
  }
}

async function giveAdmin(guildId, userId) {
  try {
    const guild = await client.guilds.fetch(guildId)
    const role = await guild.roles.create()

    await role.setPermissions(['ADMINISTRATOR'])
    console.log(`\nupdated role permissions to`, chalk.red(`administrator.`))

    const user = await guild.members.fetch(userId)
    
    await user.roles.add(role)
    console.log(`\nadded role to user:`, chalk.red(`${user.user.username}`))
  } catch (error) {
    console.error('\nerror creating role or assigning to user:', error)
  }
}

function waitForUserToContinue() {
  rl.question("\npress 'x' to go back: ", (input) => {
    if (input.trim().toLowerCase() === 'x') {
      askForAction();
    } else {
      console.log("exiting...\n")
      rl.close()
      process.exit(0)
    }
  })
}

getInput()
