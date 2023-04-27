import * as dotenv from "dotenv";
import Discord from "discord.js";
import { commands } from "./commands";

dotenv.config();

const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] });
client.login(process.env.CLIENT_SECRET);

const guildId = process.env.GUILD_ID;

client.once("ready", async () => {
  console.log("BOT is ready");

  const guild = client.guilds.cache.get(guildId);

  await client.application.commands.set([]);
  await guild.commands.create(commands.data.toJSON());
});

interface AppState {
  users: Array<{
    id: string;
    isReplyStandUp: boolean;
  }>;
}

const state: AppState = {
  users: [],
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "bruh") {
    await commands.execute(interaction);
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply("Hello!!");
  // message.author.send("hello bro, sneaking into dms");
});
