import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  SlashCommandBuilder,
} from "discord.js";

interface SlashCommand {
  data: SlashCommandBuilder;
  execute(
    interaction: CommandInteraction,
    args?: CommandInteractionOptionResolver
  ): Promise<void>;
}

export const commands: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("bruh")
    .setDescription("I am a bruh command"),
  async execute(interaction) {
    await interaction.reply("You suck!");
  },
};
