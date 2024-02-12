const { EmbedBuilder } = require("discord.js");
const CloudZCommand = require("../../structures/CloudZCommand");
const { inspect } = require(`util`);
class Eval extends CloudZCommand{
    get name(){
        return 'eval'
    }
    get aliases(){
        return ['jsk','jadu','exe']
    }
    async run(client,message,args,prefix){
        let devil = ['271996841367830529','921602447754031175'];
        if(!devil.includes(message.author.id)) return message.reply({content : `${client.emoji.cross} | Be my owner to run this command.`})
        else{
            if(!args[0])
            {
                return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Provide me something to evaluate`)]})
            }
            let ok;
            let player = client.poru.players.get(message.guild.id);
            try{
                ok = await eval(args.join(' '));
                ok = inspect(ok,{depth : 0});
            } catch(e) { ok = inspect(e,{depth : 0}) }
            let em = new EmbedBuilder().setColor(client.config.color).setDescription(`\`\`\`js\n${ok}\`\`\``);
            return message.channel.send({embeds : [em]});
        }
    }
}
module.exports = Eval;