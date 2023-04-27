import * as dotenv from "dotenv";
import Discord from "discord.js";
import { commands } from "./commands";

dotenv.config();

const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] });
client.login(process.env.CLIENT_SECRET);

const guildId = process.env.GUILD_ID;

client.once("ready", async () => {
  console.log("BOT is ready");

  await client.application.commands.create(commands.data.toJSON(), guildId);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "bruh") {
    await commands.execute(interaction);
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply("Hello!!");
});
