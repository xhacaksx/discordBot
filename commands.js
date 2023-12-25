import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "quote",
    description: "Gives a quote",
  },
  {
    name: "list",
    description: "list all available commands",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
