const { LavasfyClient } = require("lavasfy");
const config = require(`../../config.json`);
class Lavasfy extends LavasfyClient{
    constructor(client){
        super({
            clientID : config.spotifyId,
            clientSecret : config.spotifySecret,
            playlistLoadLimit : 4,
            audioOnlyResults : true,
            autoResolve : true,
            useSpotifyMetadata : true
        },[
            {
                id : "CloudZ",
                host : "narco.buses.rocks",
                port : 2269,
                password : "glasshost1984",
                secure : false
            }
        ]);
    }
}
module.exports = Lavasfy;