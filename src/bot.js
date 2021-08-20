import {Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', async()=> {
    console.log('Ready');
});

const PREFIX = '$';

let mems = ['Nimit#4979', 'krish#1234'];

client.on('messageCreate', (message) => {
    if(message.content.startsWith(PREFIX)) {
        switch(message.content.split(' ')[1]){
            case 'hello': message.channel.send('Lets start with the first clue! \nGo to this link: https://linktr.ee/welcome2gdscnuv');
                break;
            case 'GDSCNUVGG': {
                message.channel.send("GG! That would've been fun to explore let's move on to the next clue. ");
                message.channel.send({
                    files: [`${process.env.link}`]
                })
                break;
            }
            case 'https://gdsc.community.dev/navrachana-university-vadodara/': {
                message.channel.send(`Congrats ${message.author} on completing the treasure hunt!`);
                mems.push(message.author);
            }
                break;
            case 'mems': {
                message.channel.send(`${mems}`);
            }
            break;
            default: {
                message.channel.send('Wrong command!')
            }
                break;
        }
    }
})

client.login(process.env.TOKEN);
