const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("559378584284954654")
setInterval(function() {
channel.send(` Shanks Shanks Shanks Shanks`);
}, 30)
})

    // +say
      if (command === "say") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
              message.delete()
        message.channel.sendMessage(args.join(" "))
      }
       
      
 client.login(process.env.BOT_TOKEN);
