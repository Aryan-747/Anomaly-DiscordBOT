module.exports = {
    data: {
        name: `GitHub`
    },

    async execute(interaction,client) {
        await interaction.reply({
            content: `https://github.com/Aryan-747`
        });
    }
}