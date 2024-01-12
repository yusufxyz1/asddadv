const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Kritik Ekonomi | Destek")
.setDescription(`
**Sunucumuza Katıl ve Muhabbet ET!**

[≫ Sunucumuza Katılmak için Buraya Tıkla ≪](https://discord.gg/k5XwBsUr4S)
`)

return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["support"],
  };
  
  exports.help = {
    name: 'destek'
  };
