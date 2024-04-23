const {SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed.'),
    async execute(interaction, client)
    {
        
        
    }
};