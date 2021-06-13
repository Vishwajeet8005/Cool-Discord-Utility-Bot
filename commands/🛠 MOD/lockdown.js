const Discord = module.require("discord.js");

module.exports = {
   name: "lockdown",
   description: "Lockdown a Channel",
   category: "MOD",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.roles.everyone.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} the server is on lockdown`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}