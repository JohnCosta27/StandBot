import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  SlashCommandBuilder,
} from "discord.js";

interface SlashCommand {
  data:
    | SlashCommandBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute(
    interaction: CommandInteraction,
    args?: CommandInteractionOptionResolver
  ): Promise<void>;
}

export const commands: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("bruh")
    .setDescription("I am a bruh command")
    .addStringOption((option) =>
      option
        .setName("standup")
        .setDescription("What you will be doing today")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("issues")
        .setDescription("linear issues")
        .addChoices(
          { name: "Issue #00", value: "bruhhh" },
          { name: "Issue #01", value: "bruhhh" },
          { name: "Issue #02", value: "bruhhh" },
          { name: "Issue #03", value: "bruhhh" },
          { name: "Issue #04", value: "bruhhh" },
          { name: "Issue #05", value: "bruhhh" },
          { name: "Issue #06", value: "bruhhh" },
          { name: "Issue #07", value: "bruhhh" },
          { name: "Issue #08", value: "bruhhh" },
          { name: "Issue #09", value: "bruhhh" },
          { name: "Issue #10", value: "bruhhh" },
          { name: "Issue #11", value: "bruhhh" },
          { name: "Issue #12", value: "bruhhh" },
          { name: "Issue #13", value: "bruhhh" },
          { name: "Issue #14", value: "bruhhh" },
          { name: "Issue #15", value: "bruhhh" },
          { name: "Issue #16", value: "bruhhh" },
          { name: "Issue #17", value: "bruhhh" },
          { name: "Issue #18", value: "bruhhh" },
          { name: "Issue #19", value: "bruhhh" },
          { name: "Issue #20", value: "bruhhh" }
        )
    ),
  async execute(interaction) {
    await interaction.reply("Stand up has been submitted");
  },
};
