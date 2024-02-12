const CloudZClientEvent = require("../../structures/Eventhandler");

class TrackEnd extends CloudZClientEvent{
    get name(){
        return 'playerEnd';
    }
    async run(player){
        try{
            player.data.get('music').delete()
        } catch(e)
        {
            
        }
    }
}
module.exports = TrackEnd;