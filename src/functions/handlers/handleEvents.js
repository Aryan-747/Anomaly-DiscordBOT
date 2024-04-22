const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async() => {
        const eventFolders = fs.readdirSync(`./src/events`);
    }
}