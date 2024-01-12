const Discord = require('discord.js')
let z = `a!`
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle("Kritik Ekonomi | Komut Listesi")
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
**\`${z}yardım ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`, \`para\`
`)
.addField("__🎲  Oyunlar__",`
**\`${z}yardım oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slot-machine\`
`)
.addField("__💼  Destek__",`
**\`${z}yardım destek\`** - *Bize destek olabiliceğiniz komutlar!*

\`davet\`, \`yapımcım\`, \`destek\`,\`yardım\`

Ücretsiz Kodlar Sunduğumuz [__Discord Sunucumuza__](https://discord.gg/k5XwBsUr4S) katılmayı unutmayın!
`)

let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰  Ekonomi Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`${z}günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`${z}para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`${z}gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`${z}soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`${z}çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`${z}yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`${z}çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`${z}çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
[Destek Sunucumuza](https://discord.gg/k5XwBsUr4S) katılmayı unutmayın
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Oyun Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`${z}bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`${z}slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`${z}balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Destek Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`${z}davet\` - __Botu kendi sunucunuza eklersiniz.__**
**\`${z}destek\` - __Botun destek sunucusunun linkini atar.__**
**\`${z}yapımcım\` - __Botun yapımcısını/geliştiricisini atar.__**
**\`${z}oy-ver\` - __Botun oy verme linkini atar.__**
[Destek Sunucumuza](https://discord.gg/k5XwBsUr4S) katılmayı unutmayın
`)
  if(!args[0]) return message.channel.send(yardim)
  

  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  if(args[0] === 'destek' || args[0] === 'support') return message.channel.send(destek)
  
  
};


exports.conf = {
    enabled: true, 
    aliases: ["yardim","help",'komutlar','commands'],
  };
  
  exports.help = {
    name: 'yardım'
  };
