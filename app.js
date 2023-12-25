import { Client, GatewayIntentBits, InteractionType } from "discord.js";
import dotenv from "dotenv";

dotenv.config({
  path: "/.env",
});
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  //console.log(message.content);
  if (message.author.bot) return;

  message.reply({
    content: `hello ${message.author} , how are you?`,
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
  if (interaction.commandName === "quote") {
    await fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        return interaction.reply(data.quote);
      });
  }

  if (interaction.commandName === "list") {
    await interaction.reply("1. ping/n2.quote/n3.list");
  }
});
client.login(process.env.TOKEN);
