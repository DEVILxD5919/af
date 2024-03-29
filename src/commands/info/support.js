const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const CloudZCommand = require(`../../structures/CloudZCommand`);
class Support extends CloudZCommand{
    get name(){
        return 'support'
    }
    get aliases(){
        return ['supp'];
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix){
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`Get the [support here](${client.config.server})`)],components : [
            new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(`Support`).setURL(client.config.server))
        ]});
    }
}
module.exports = Support;