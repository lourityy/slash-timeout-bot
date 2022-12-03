const { Collection, EmbedBuilder } = require("discord.js");
const louritydb = require("croxydb");
const { readdirSync } = require("fs");

module.exports = async (client, interaction) => {

  if (interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;
    // Lourity <3 discord.gg/altyapilar 
    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, louritydb);
      }
    });
  }
};
