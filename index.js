const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("./settings");
client.login(token);

client.on("message", message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === "!classic") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel
        .join()
        .then(connection => {
          // Connection is an instance of VoiceConnection
          message.reply("Classic!");

          const dispatcher = connection
            .playFile("./classic.mp3")
            .on("end", () => {
              voiceChannel.leave();

              process.exit();
            });

          dispatcher.on("error", e => {
            // Catch any errors that may arise
            console.log(e);
          });
        })
        .catch(console.log);
    } else {
      message.reply("Twat join a fucking voice channel");
    }
  }

  if (message.content === "!int") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel
        .join()
        .then(connection => {
          // Connection is an instance of VoiceConnection
          message.reply("INT INT INT INT INT INT");
          // const dispatcher = connection.playFile('./classic.mp3')

          const dispatcher = connection.playFile("./int.mp3").on("end", () => {
            voiceChannel.leave();
            process.exit();
          });

          dispatcher.on("error", e => {
            // Catch any errors that may arise
            console.log(e);
          });
        })
        .catch(console.log);
    } else {
      message.reply("Twat join a fucking voice channel");
    }
  }
  if (message.content === "!fix") {
    process.exit();
  }
});
