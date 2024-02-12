const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const CloudZCommand = require("../../structures/CloudZCommand");

class Help extends CloudZCommand{
    get name(){
        return 'help';
    }
    get aliases(){
        return ['h','help']
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix){
        try{
        let em = new EmbedBuilder().setAuthor({ name: `${client.user.username}`})
    .setDescription(`**Hey **<@${message.author.id}>\n**Welcome To The Help Menu Of** <@${client.user.id}>\n\n<a:Loading:1204884287531262002>** : \`${client.ws.ping}ms\`**`)
    .addFields([ { name: '<:icons8bot64:1155153133928980572> __MODULES__ <:icons8bot64:1155153133928980572>', value: `\n<:icons8musicalnotes64:1155153169878368358> \`:\` **Music**\n<:icons8filters64:1155171760988237958> \`:\` **Filters**\n<:icons8settings64:1155202277846569171> \`:\` **Settings**\n<:icons8info64:1155371128584417331> \`:\` **Information**\n<:icons8setup64:1155153139943616562> \`:\` **Utility**\n<:icons8lyrics64:1155153120213618808> \`:\` **List Commands**\n\n\`Choose From The Menu Below\``, inline: false }
      ])  
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.config.color)
    .setFooter({
        text: `Thanks For Choosing HydroGen`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      });

        
        

        let select = new SelectMenuBuilder().setCustomId(`ok`).setPlaceholder(`Select Here`).addOptions([
            {
                label : `Home`,
                emoji : `${client.emoji.home}`,
                value : `ok1`
            },
            {
                label : `Music`,
                emoji : `${client.emoji.music}`,
                value : `ok2`
            },
            {
                label : `Filters`,
                emoji : `${client.emoji.filters}`,
                value : `ok3`
            },
            {
                label : `Settings`,
                emoji : `${client.emoji.settings}`,
                value : `ok4`
            },
            {
                label : `Information`,
                emoji : `${client.emoji.info}`,
                value : `ok5`
            },
            {
                label : `Utility`,
                emoji : `<:icons8setup64:1155153139943616562>`,
                value : `ok7`
            },
            {
                label : `All Commands`,
                emoji : `${client.emoji.allCommands}`,
                value : `ok6`
            },
        ]);
        let ro2 = new ActionRowBuilder().addComponents(select);

        let em1 = new EmbedBuilder().setColor(client.config.color).addFields({name : `**Music Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `music`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `music`).map(r => `\`${r.name}\``).sort().join(`, `)}`});
        let em2 = new EmbedBuilder().setColor(client.config.color).addFields({name : `**Filter Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `filters`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `filters`).map(r => `\`${r.name}\``).sort().join(`, `)}`});
        let em3 = new EmbedBuilder().setColor(client.config.color).addFields({name : `**Settings Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `set`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `set`).map(r => `\`${r.name}\``).sort().join(`, `)}`});
        let em4 = new EmbedBuilder().setColor(client.config.color).addFields({name : `**Information Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `info`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `info`).map(r => `\`${r.name}\``).sort().join(`, `)}`});
        let em6 = new EmbedBuilder().setColor(client.config.color).addFields({name : `**Utility Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `utility`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `utility`).map(r => `\`${r.name}\``).sort().join(`, `)}`});
            let em5 = new EmbedBuilder().setColor(client.config.color).addFields([
            {
                name : `**Music Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `music`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `music`).map(r => `\`${r.name}\``).sort().join(`, `)}`
            },
            {
                name : `**Filter Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `filters`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `filters`).map(r => `\`${r.name}\``).sort().join(`, `)}`
            },
            {
                name : `**Settings Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `set`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `set`).map(r => `\`${r.name}\``).sort().join(`, `)}`
            },
            {
                name : `**Information Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `info`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `info`).map(r => `\`${r.name}\``).sort().join(`, `)}`
            },
            {
                name : `**Utility Commands** [${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `utility`).size}]`,value : `${client.CloudZCommands.commands.filter(x => x.cat && x.cat === `utility`).map(r => `\`${r.name}\``).sort().join(`, `)}`
            },
        ]).setThumbnail(message.author.displayAvatarURL({dynamic : true})).setFooter({text : `Developed By Cocaine` , iconURL : message.guild.iconURL({dynamic : true})})


        let msg = await message.channel.send({embeds : [em],components : [ro2]});
        let call = await msg.createMessageComponentCollector({
            filter:(o) =>{
                if(o.user.id === message.author.id) return true;
                else{
                    return o.reply({content : `${client.emoji.cross} | This is not your session run ${prefix}help instead.`,ephemeral : true})
                }
            },
            time : 50000,
        });
        call.on('collect',async(int) => {
            if(int.isButton())
            {
                if(int.customId === `m1`)
                {
                    return int.reply({embeds : [em1], ephemeral: true });
                }
                if(int.customId === `m2`)
                {
                   return int.reply({embeds : [em2], ephemeral: true });
                }
                if(int.customId === `m3`)
                {
                    return int.reply({embeds : [em3], ephemeral: true });
                }
                if(int.customId === `m4`)
                {
                    return int.reply({embeds : [em4], ephemeral: true });
                }
                if(int.customId === `m5`)
                {
                    return int.reply({embeds : [em5], ephemeral: true });
                }
                if(int.customId === `m7`)
                {
                    return int.reply({embeds : [em6], ephemeral: true });
                }
            }
            if(int.isSelectMenu())
            {
                for(const value of int.values)
                {
                    if(value === `ok1`)
                    {
                        return int.reply({embeds : [em], ephemeral: true });
                    }
                    if(value === `ok2`)
                    {
                        return int.reply({embeds : [em1], ephemeral: true });
                    }
                    if(value === `ok3`)
                    {
                        return int.reply({embeds : [em2], ephemeral: true });
                    }
                    if(value === `ok4`)
                    {
                        return int.reply({embeds : [em3], ephemeral: true });
                    }
                    if(value === `ok5`)
                    {
                        return int.reply({embeds : [em4], ephemeral: true });
                    }
                    if(value === `ok6`)
                    {
                        return int.reply({embeds : [em5], ephemeral: true });
                    }
                    if(value === `ok7`)
                {
                    return int.reply({embeds : [em6], ephemeral: true });
                }
                    
                }
            }
        });
        call.on('end',async() => {
            if(!msg) return;
            msg.edit({embeds : [em],components : [],content : `${client.emoji.info} | Help commands timed out. Run \`${prefix}help\` again.`})
        });
    } catch(e) { console.log(e) }
} 
}
module.exports = Help;