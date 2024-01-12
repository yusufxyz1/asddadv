const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Kritik Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` Zoro \`**

**Botun Sahibi** | <@zorotech>  

[Destek olan Zoro'ya Teşekkür Ederiz!](https://discord.gg/k5XwBsUr4S) )
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
