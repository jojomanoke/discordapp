exports.run = (client, message, args) => {
    let name = args[0];
    if(args[1] != null){
        let type = args[1];
        message.guild.createChannel(name, type);
        message.reply(`Channel of the type ${type} and with the name ${name} has been created`);
        if(args[2]!= null){
            return;
        }
    }
    else{
        message.guild.createChannel(name, "text");
        message.reply(`Channel ${name} created`);
    }
};