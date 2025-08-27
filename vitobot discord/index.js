const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

const online = require("./server");
const config = require('./config');
const commands = require('./help');
const users = require('./users');

const client = new Discord.Client()

// users arrays
const douglas = users.douglas
const vitor = users.vitor
const matheus = users.matheus
const andre = users.andre
const pito = users.pito
const tommy = users.tommy
const layla = users.layla
const lupi = users.lupi
const poppy = users.poppy

// global var
var status = 'off'
var last_index = 0;
var last_user = ''

// start bot
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus('online')
    client.user.setPresence({
        activity: {
            name: 'https://twitter.com/vitroBOT',
            type: 3
        }
    });
});

client.on('message', async message => {
    // Check for command
    if (message.content.startsWith(config.prefix)) {
        let args = message.content.slice(config.prefix.length).split(' ');
        let command = args.shift().toLowerCase();

        switch (command) {
            case 'ping':
                let msg = await message.reply('Pinging...');
                await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
                break;

            case 'say':
            case 'repeat':
                if (args.length > 0)
                    message.channel.send(args.join(' '));
                else
                    message.reply('You did not send a message to repeat, cancelling command.')
                break

            case 'status':
            case 's':
                if (args.length == 1) {
                    if (args[0] == 'on') {
                        status = 'on'
                        message.channel.send('status changed to on')
                    } else if (args[0] == 'off') {
                        status = "off"
                        message.channel.send('status changed to off')
                    } else {
                        message.channel.send('r u dumb?')
                    }
                }
                break

            case 'last':
            case 'l':
                if (last_user == '') {
                    message.channel.send('no pics requested yet')
                    break
                }
                message.channel.send(`${last_user} -> ${last_index}`)
                break

            case 'twitter':
            case 'tt':
                message.channel.send('https://twitter.com/vitroBOT')
                break

            case 'douglas':
            case 'd':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= douglas.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${douglas.length - 1} cunt`)
                        break
                    }
                    message.channel.send(douglas[args])
                }
                else {
                    let n = Math.floor(Math.random() * douglas.length)
                    last_index = n
                    last_user = 'douglas'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(douglas[n])
                }
                break

            case 'vitor':
            case 'vitro':
            case 'vito':
            case 'vi':
            case 'v':
                res = send_pic(args, vitor)
                if (status == 'on') {
                    message.channel.send(res[0])
                    message.channel.send(res[1])
                } else
                    message.channel.send(res)
                break

            case 'matheus':
            case 'ma':
            case 'mat':
            case 'm':
            case 'teteus':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= matheus.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${matheus.length - 1}`)
                        break
                    }
                    message.channel.send(matheus[args])
                }
                else {
                    let n = Math.floor(Math.random() * matheus.length)
                    last_index = n
                    last_user = 'matheus'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(matheus[n])
                }
                break

            case 'andre':
            case 'a':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= andre.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${andre.length - 1}`)
                        break
                    }
                    message.channel.send(andre[args])
                }
                else {
                    let n = Math.floor(Math.random() * andre.length)
                    last_index = n
                    last_user = 'andre'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(andre[n])
                }
                break

            case 'pito':
            case 'pi':
            case 'pii':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= pito.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${pito.length - 1}`)
                        break
                    }
                    message.channel.send(pito[args])
                }
                else {
                    let n = Math.floor(Math.random() * pito.length)
                    last_index = n
                    last_user = 'pito'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(pito[n])
                }
                break

            case 'tommy':
            case 'tom':
            case 'to':
            case 't':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= tommy.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${tommy.length - 1}`)
                        break
                    }
                    message.channel.send(tommy[args])
                }
                else {
                    let n = Math.floor(Math.random() * tommy.length)
                    last_index = n
                    last_user = 'tommy'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(tommy[n])
                }
                break

            case 'layla':
            case 'la':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= layla.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${layla.length - 1}`)
                        break
                    }
                    message.channel.send(layla[args])
                }
                else {
                    let n = Math.floor(Math.random() * layla.length)
                    last_index = n
                    last_user = 'layla'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(layla[n])
                }
                break

            case 'lupi':
            case 'lup':
            case 'lu':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= lupi.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${lupi.length - 1}`)
                        break
                    }
                    message.channel.send(lupi[args])
                }
                else {
                    let n = Math.floor(Math.random() * lupi.length)
                    last_index = n
                    last_user = 'lupi'

                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(lupi[n])
                }
                break

            case 'poppy':
            case 'po':
            case 'poo':
            case 'pop':
            case 'poop':
            case 'zelda':
            case 'ze':
            case 'z':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] >= poppy.length || args[0] < 0) {
                        message.reply(`select a number between 0 and ${poppy.length - 1}`)
                        break
                    }
                    message.channel.send(poppy[args])
                }
                else {
                    let n = Math.floor(Math.random() * poppy.length)
                    last_index = n
                    last_user = 'poppy'
                    if (status == 'on')
                        message.channel.send(n)
                    message.channel.send(poppy[n])
                }
                break

            case 'pet':
            case 'p':
                if (args.length == 1) {
                    if (isNaN(args[0]) || args[0] > 15 || args[0] < 0) {
                        message.reply(`select a number between 0 and 15`)
                        break
                    }
                    var number = args[0];
                    message.channel.send(`sending ${number} pics`)
                } else
                    var number = 1;
                for (let i = 0; i < number; i++) {
                    let n = (Math.floor(Math.random() * 4))
                    if (n == 0) {
                        let n = Math.floor(Math.random() * layla.length)
                        last_index = n
                        last_user = 'layla'
                        if (status == 'on')
                            message.channel.send(n)
                        message.channel.send(layla[n])
                    } else if (n == 1) {
                        let n = Math.floor(Math.random() * tommy.length)
                        last_index = n
                        last_user = 'tommy'
                        if (status == 'on')
                            message.channel.send(n)
                        message.channel.send(tommy[n])
                    } else if (n == 2) {
                        let n = Math.floor(Math.random() * lupi.length)
                        last_index = n
                        last_user = 'lupi'
                        if (status == 'on')
                            message.channel.send(n)
                        message.channel.send(lupi[n])
                    } else if (n == 3) {
                        let n = Math.floor(Math.random() * poppy.length)
                        last_index = n
                        last_user = 'poppy'
                        if (status == 'on')
                            message.channel.send(n)
                        message.channel.send(poppy[n])
                    }
                }
                break;

            /* Unless you know what you're doing, don't change this command. */
            // idk what im doing so i wont change this command
            case 'help':
            case 'h':
                let embed = new MessageEmbed()
                    .setTitle('HELP MENU')
                    .setColor('GREEN')
                    .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL());
                if (!args[0])
                    embed
                        .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
                else {
                    if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
                        let command = Object.keys(commands).includes(args[0].toLowerCase()) ? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
                        embed
                            .setTitle(`COMMAND - ${command}`)

                        if (commands[command].aliases)
                            embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
                        embed
                            .addField('DESCRIPTION', commands[command].description)
                            .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
                    } else {
                        embed
                            .setColor('RED')
                            .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
                    }
                }
                message.channel.send(embed);
                break;
        }
    }
});

function send_pic(args, user, name) {
    if (args.length == 1) {
        console.log(args[0] < 0)
        if (isNaN(args[0]) || args[0] >= user.length || args[0] < 0) {
            return (`select a number between 0 and ${user.length - 1}`)
        }
        return (user[args])
    } else {
        let n = Math.floor(Math.random() * vitor.length)
        last_index = n
        last_user = name
        if (status == 'on') {
            res = [n, user[n]]
            return (res)
        }
        //return(n)
        return (user[n])
    }
}

online()
client.login(config.token);