import { Client, GatewayIntentBits } from "discord.js";

import { TOKEN } from "./TOKEN.js"; //token in ./token.js

//vvv permissions vvv

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

// when bot is ready, the bot will say "NAME#0000 ONLINE"
client.once("ready", () => {
  console.log(`${client.user.tag} online!`);
});

//bot token
client.login(TOKEN);

//function that will be export to express app

export function discordSend(msg) {
  console.log("sendToDiscord");
  const channel = client.channels.cache.get("###YOURCHANNELID###");
  channel.send(msg);
}
