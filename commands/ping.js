const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('is bilby dying'),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(4_000);
    await interaction.reply(`Websocket heartbeat: ${interaction.client.ws.ping}ms.`);
  }
};