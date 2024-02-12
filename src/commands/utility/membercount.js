const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const CloudZCommand = require("../../structures/CloudZCommand");

class Membercount extends CloudZCommand{
    get name(){
        return 'membercount';
    }
    get aliases(){
        return ['mc']
    }
    get cat(){
        return 'utility';
    }
    async run(client,message,args,prefix){


    
    let embed = new EmbedBuilder()
        .setAuthor({name: `Members`, iconURL: message.guild.iconURL({dynamic:true})})
        .setDescription(`${message.guild.memberCount}`)
        .setColor(client.config.color)
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
  }
};
module.exports = Membercount;