const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const CloudZCommand = require("../../structures/CloudZCommand");

class Invite extends CloudZCommand{
    get name(){
        return 'invite'
    }
    get aliases(){
        return ['inv','i']
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix)
    {
        let e = new EmbedBuilder().setColor(client.config.color).setDescription(`Click [here](https://discord.com/api/oauth2/authorize?client_id=1148588190475747399&permissions=35321848024064&scope=bot) to [invite](https://discord.com/api/oauth2/authorize?client_id=1148588190475747399&permissions=35321848024064&scope=bot) me`);
        let r = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://discord.com/api/oauth2/authorize?client_id=1148588190475747399&permissions=36965376&scope=bot`).setLabel(`Invite`)
        )
        return message.channel.send({embeds : [e] , components : [r]});
    }
}
module.exports = Invite;