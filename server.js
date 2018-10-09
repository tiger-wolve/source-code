
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
// Ignore this counting
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const snekfetch = require('snekfetch');
const db = require('quick.db')
const yt = require ('ytdl-core')
const got = require ('got');
const send = require('quick.hook')
const ms = require("ms");
const fs = require("fs")
const msgr = "message.author"
var currencyFormatter = require('currency-formatter')
var ms1 = require('parse-ms');
let cooldown = 2.88e+7; 
let coins = require("./coins.json");
const shorten = require('isgd');
const urban = require('urban');
const meme = require('memejs');
const superagent = require ('superagent');
const botOwner = "YOUR ID HERE"
const botUser = "BOT ID HERE"
const bot = "client"
const msg = "message"
var prefix = "!!"
var likes = (Math.floor(Math.random() * 96777) + 1)
var comments = (Math.floor(Math.random() * 1677) + 1)



client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`with ${client.users.size} users | !!help`, {"type": "STREAMING"});
});

//ient.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
 // console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  //client.user.setActivity(`with ${client.users.size} users | !!help`, {"type": "STREAMING"});
//});

client.on ("guildCreate", guild => {
//nst invite = await guild.channels.find(c => c.type !== "category" && c.position === 0).createInvite({
        
    let guildCreateChannel = client.channels.get('498396795529986048')
   //guild.createChannel("server-log");
    let joinEmbed = new Discord.RichEmbed()
    .setTitle("Bot joined server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner.user.tag}`)
   // .addField(`Server Invite:`, `${invite.url}`)
    .setColor("#4286f4")
    .setFooter (`Evil Tiger`)
    .setTimestamp();
    guildCreateChannel.send(joinEmbed);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  //console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  //client.user.setActivity(`with ${client.users.size} users | !!help`, {"type": "STREAMING"});
  let guildDeleteChannel = client.channels.get ('498396795529986048')
  let leaveleaveEmbed = new Discord.RichEmbed ()
  .setTitle ("Bot left server!")
  .setThumbnail (guild.iconURL)
  .addField (`Server Name:`, guild.name )
  .addField (`Server ID:`, guild.id)
  .addField (`Server Owner:`, guild.owner.user.tag)
  .setColor ("RED")
  .setFooter (`Evil Tiger`)
  .setTimestamp ();
  guildDeleteChannel.send (leaveleaveEmbed)
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(prefix) !== 0) return;
  if (message.channel === "dm") return;
  //message.author === "!!help") return message.author.send ("Please do not use commands in my DMs!");
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var log = "log"
  const modlog = message.guild.channels.find(channel => channel.name === log);
  
  if (command === 'butt') {
  message.channel.send('<a:DHDiscordButt_ocks:446436556388171777>');
}
  
  if (command === 'hug') {
    message.channel.send ('<a:DHBlobHugHeart:446437638719930368>');
  }
  
  if (command === 'killme') {
    message.channel.send(`${message.author.username} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.tag}`); }, 1000);
    });
}

  if (command === 'he') {
    const error = require ('./errors.json')
    let he = args.join (` `)
    if (!he) return message.reply ("he");
    if (!error) return message.reply ("Undefined");
    
    message.channel.send (error.he)
  }
  
  //f (command === 'cowsay') {
    //var cowsay = require("cowsay");
//if (!args.join (" ")) return message.channel.send ("Enter some text please!");
//xports.run = (client, msg, args) => {

   // let text = args.join(" ");
  //  cowsay(args.join (" "), (err, data) => {

   // msg.channel.send(data, {
  //    code: 'css'
   // });
 //   });
   // console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
//}
  
  if (command === 'reverse') {
     if(!args[0]) return message.channel.send(`Correct usage: \`${prefix}reverse (text to reverse)\``);

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
  
if (command === 'hook') {
  if (!message.member.hasPermissions ("MANAGE_SERVER")) return message.reply ("You are needed to have the \"MANAGE SERVER\" permission in order to use this command!");
let heck = args.join (" ");
if (!heck) return message.reply("You need to supply some text for me to send as a webhook!");

let hookch = message.channel
send(hookch, heck, {
  name: `${message.member.nickname}`,
  icon: message.author.displayAvatarURL
});
}
  
  if (command === 'ehook') {
    if (!message.member.hasPermissions ("MANAGE_SERVER")) return message.reply ("You are needed to have the \"MANAGE SERVER\" permissions in order to use this command!")
    let heck = args.join (" ");
    //const error = require ('./errors.json');
    if (!heck) return message.reply (`You need to supply me some text to make this command run!`)
    
    let hookch = message.channel
    let embed = new Discord.RichEmbed ()
    .setDescription  (heck)
    .setColor("GREEN")
    send (hookch, embed, {
      name: `${message.member.nickname}`,
      icon: message.author.displayAvatarURL
    });
  }
  
  if (command === 'calc') {
   const math = require('math-expression-evaluator');
let eq = args.join (' ')
//xports.run = (client, message, args, tools) => {
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setDescription ('Please enter a equation')
    .setFooter ('Use "/" to divide, "*" to multiply, "+" to add and "-" to subtract')
    .setColor ("#7892DA")
    // Verify Input
  
        
        // Configure Embed
    //const embed = new Discord.RichEmbed
  
        
        // Return & Send Embed
      
   if (!eq) return message.channel.send(embed);
        
    
    
    // Evaluate Expression
    let result;
    try {
        
        result = math.eval(eq);
        
    } catch (e) { // This will catch any errors in the expression
        
        result = 'Error: "Invalid Input"';
        
    }
        
    
    // Configure Embed
       const embed2 = new Discord.RichEmbed ()
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``);
         
    // Send Embed
    message.channel.send(embed2);
    
}
  
  //f (command === 'unban') { const errors = require ("./errors.json")       let user = message.mentions.users.first()  if (!args[0]) return message.channel.send('Usage : r!unban **<user>**');   if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${errors.adminperm}`).then(message => message.delete(3000));   if (!message.guild.member(botUser).hasPermission("BAN_MEMBERS")) return message.channel.send(`${errors.botpermission}`).then(message => message.delete(3000));  if (user.id === message.author.id) return mess
  
  //if (command === 'bugreport') {
       //let args = message.content.split(' ').slice(1).join(' ');
  //  message.delete();

   // if (cooldown.has(message.author.id && message.guild.id)) {
        //eturn message.reply('**[COOLDOWN]** Bugreport command has **5 Minutes** Cooldown!');
   // }
    //if (args.length < 1) {
       // return message.reply('You must supply me full reportation!');
   // }
    //cooldown.add(message.author.id && message.guild.id);

    //setTimeout(() => {
       // cooldown.delete(message.author.id && message.guild.id);
    //}, 300000);
   // let guild = message.guild;
  //  const cnl = client.channels.get('498368625980473354');
   // message.reply('Hey we got your report , we will reply soon as possible here is the full reportation:' + args);
   // const embed = new Discord.RichEmbed()
  //.setAuthor(`Report from ${message.author.tag}`, message.author.displayAvatarURL)
  //.addField('Report:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
 // .setThumbnail(message.author.displayAvatarURL)
  //.setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
 // .setColor(16711728);
 //   message.channel.send(embed);
  //  const embed2 = new Discord.RichEmbed()
  //.setAuthor(`Report from ${message.author.tag}`, message.author.displayAvatarURL)
  //.addField('Report:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
 // .setThumbnail(message.author.displayAvatarURL)
//  .setColor(16711728);
  //  cnl.send(embed2)
 // .catch(e => logger.error(e))
// In your command
//}
  
  if (command === 'role-info') {
      var irol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${irol}`)
  var hata = new Discord.RichEmbed()
  .setColor(10038562)
  .setDescription(`❌ You are not using the command correctly! usage:\`${prefix}roleinfo <role name>\``);
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('#7892DA')
  .addField('✏ Role Name', role.name)
  .addField('🆔 Role ID', role.id)
  .addField('👥 Number of members having the role', role.members.size)
  .addField('💙 Role color', role.hexColor)
  .addField('📣 Role Mentionable?', role.mentionable ? 'Yes' : 'No')
  .addField('📅 Role CreatedAt', moment(role.createdAt).format("LL"))
//addField ('👮 Role Permissions', role.hasPermission)
  .setFooter("Powered by Evil Tiger");
  message.channel.send(roleinfoEmbed)
}
  
  if (command === 'tada') {
    message.channel.send ('<a:DHHyperTada:477748743093878784>');
  }
  
  
  if (command === 'cowsay') {
    const cowsay = require ('cowsay')
  //onst cooldown = new Set();
//xports.run = (client, message, args) => {
  /*
  Checks if author is inside the cooldown list
  */
  //  if (cooldown.has(message.author.id && message.guild.id)) {
     //   return message.reply(`This command have a cooldown of 5 **Minutes**`);
    //}
    /*
      Command's cooldown due to spam issues
    */
    //cooldown.add(message.author.id && message.guild.id);
   // setTimeout(() => {
        //cooldown.delete(message.author.id && message.guild.id);
   // }, 300000);

    /*
      Checks if txt was supplied
    */

    let txt = message.content.split(' ').slice(1).join(' ');
    if (!txt) {
        return message.reply('Invalid arguments, what do you want the cow to say?');
    }
    /*
      Use the module to generate the cow plus
      the text and then send it to the author's DMs
    */
    message.author.send(cowsay.say({
        text: txt,
        e: 'oO'
    }), {code: 'css'});
    message.channel.send(' :inbox_tray: Sent into DM due to anti spam system! :inbox_tray: ');
}
  
  // (command === 'mylevel') {
    //nst friendly = client.config.permLevels.find(l => l.level === level).name;
  //sage.reply(`Your permission level is: ${level} - ${friendly}`);

  
  if (command === "remind-me") {


    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: `!!remind-me 15m <text>`**");

    let reminder = args.slice(1).join(" ");

    let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .addField("Time", `\`\`\`${reminderTime}\`\`\``)
        .setTimestamp();

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Reminder", `\`\`\`${reminder}\`\`\``)
            .setTimestamp()

        message.author.send(remindEmbed);
    }, ms(reminderTime));

}
  
  if (command === 'emojify') {
    const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


//xports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
}
  
          
  if(command === "create-invite") {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription(`**Here is your permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
  }
  
  //if (command === 'join') {
   //// const voiceChannel = message.member.voiceChannel;
  //if (!message.member.voiceChannel) { return message.channel.send("You are not in a voice channel, baka! Don't force me to be lonely!"); }

  //const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  //f (permissions.has("CONNECT") === false) { return message.channel.send(":x: I do not have enough permissions to connect to your voice channel. I am missing the Connect permission."); }
  //f (permissions.has("SPEAK") === false) { return message.channel.send("Wow. Invite me to play music for you, yet I can't speak in the channel. You're more heartless than my owner. Give me the channel permission to speak and then come back and invite me."); }
////
  //message.member.voiceChannel.join();
 // return message.channel.send(`Now tuned into: ${message.member.voiceChannel}. Ready and awaiting orders!`);
//}
  
  //f (command === 'leave') {
  //if (!message.member.voiceChannel) { return message.channel.send("You are not in my voice channel! Come in and tell me face to face!"); } message.member.voiceChannel.leave();return message.channel.send(`I have left ${message.member.voiceChannel}.`);} if (command === 'np')  const moment = require("moment")equire("moment-duration-format");

//exports.run = async (client, message) => {
  //f (!message.guild.voiceConnection) { return message.channel.send("How can I be playing music when I'm not in a voice channel, baka!"); }onst handler = client.queue.get(message.guild.id);f (!handler || handler.playing === false) { return message.channel.send(`I'm not playing any music right now! Add some using ${message.guild.settings.prefix}`); }
  
  //let song = handler.songs[0];const embed = new client.methods.Embed() .setColor(0x04d5fd) .setTimestamp().setTitle(`📻 __${message.guild.name}'s Music Stream__`)
  //.setDescription("*Streaming all your requests from the fabulous library of Youtube.*") .setThumbnail(song.image).addField("**Title:**", `[${song.title}](${song.url})`).addField("**Requested by:**", song.requester, tr.addField("**Time Left:**", `${moment.duration((handler.songs[0].seconds * 1000) - message.guild.voiceConnection.dispatcher.time).format("h:mm:ss", { trim: false })} out of ` + moment.duration(handler.songs[0].seconds * 1000).format("h:mm:ss", { trim: false }), trumessage.channel.send({embed});
  
// if (command === 'pause') {
   // let msg = "message" if (!msg.guild.voiceConnection) { throw `I am not connected in a voice channel, please add some songs to the mix first with ${msg.guild.settings.prefix}queueadd`; }if (msg.guild.voiceConnection.dispatcher.paused) { return msg.send("The stream is already paused, baka!"); msg.guild.voiceConnection.dispatcher.pause();return msg.send("⏸ The mix is now paused."
  
  //f (command === 'play') {  const handler = client.queue.get(msg.guild.id);f (!handler) { throw `Add some songs to the mix first with ${msg.guild.settings.prefix}queueadd [Youtube URL]`; }
  
  //if (!msg.guild.voiceConnection)  await client.commands.get("join").run(client, msg)  if (!msg.guild.voiceConnection) { return;   return this.run(client, msg); if (handler.playing) { if (msg.member.voiceConnection !== msg.guild.voiceConnection) { throw "I'm sorry. I'm already playing in another voice channel on your guil // throw "I'm already playing in your channel.";else { handler.playing = true; }function play(song) {  if (song === unde  return msg.channel.send("All your selected tunes have been played. I'll be taking my leave now.").then((    handler.playing =   return msg.member.voiceChannel.leasg.channel.send(`📻 Playing ${song.requester}'s request: **${song.title}**`).catch(err => client.emit("log", err, "e
  //return msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes: 2 })  .on("end", () => { setTimeout(() => {   handler.songs.shift();  play(handler.songs[0]);  }, 100); })  .on("error", err => msg.channel.send(`error: ${err}`).then(() =>    handler.songs.shift()  play(handler.songs[0]);  })); }(handler.songs[0]));return null; }if (command === 'resume') { if (!msg.guild.voiceConnection) { return "I am not connected in a voice channel, please add some songs to the mix first!"; }if (msg.guild.voiceConnection.dispatcher.paused === false) { return msg.send("The stream is not paused, baka!"); }msg.guild.voiceConnection.dispatcher.resume();msg.send("▶ Now resuming your tunes. Keep partying!");}
  
  //if (command === 'queueadd') {
 //   const getInfoAsync = require("util").promisify(yt.getInfo);
//const url = require("url");

//rts.run = async (client, msg, [song]) => {
  //const YTRegExp = new RegExp(/(?:v.|d\/|e\/)([\w-_]{11})/);
 // var songID = url.parse(song).path.split("/")[1];
 // var id = songID.match(YTRegExp);

  //if (id === null) { throw "You must provide a valid YouTube URL."; }
 // const info = await getInfoAsync(`https://youtu.be/${id[1]}`);

  //if (client.queue.has(msg.guild.id) === false) { client.queue.set(msg.guild.id, { playing: false, songs: [], }); }

 // client.queue.get(msg.guild.id).songs.push({
   // url: song,
 //   title: info.title,
 //   seconds: info.length_seconds,
   // requester: msg.author.username,
  //  image: info.thumbnail_url
 // });


  
  //f (command === 'queue') {
   // const moment = require("moment");//equire("moment-duration-format");

//exports.run = (client, message, page) => {
  //onst handler = client.queue.get(message.guild.id);
  //f (!handler) { throw `Hmm... I've tried to find your list of songs but it doesn't look like you have a queue. Better add some by ${message.guild.settings.prefix}add.`; }

  //var count;
  // (page.length < 1 || page === 1) { page = 1; count = 0; }
  //else { count = (10 * (page - 1)); } 

  //if (handler.songs.length < count) { return message.channel.send(`I can't show you that page for its page number is greater than my queue pages. There are currently ${Math.ceil(handler.songs.length / 10)}`); }

  ////if (handler.songs.length === 1) { var SongMessage = "song"; }
 // else { var SongMessage = "songs"; }

 // const embed = new client.methods.Embed() .setColor(0x04d5fd.setTitle(`📻 __${message.guild.name}'s Stream of Music__` .setDescription(`Currently streaming ${handler.songs.length} ${SongMessage}.`) .setThumbnail(message.guild.iconURL()) .setFooter(`Page: ${page} of ${Math.ceil(handler.songs.length / 10)}` for (let i = count; i < Math.min(handler.songs.length, (count + 10)); i++) { embed.addField(`${i + 1}) ${handler.songs[i].title}`, `Requested by: ${handler.songs[i].requester} - Run time: ${moment.duration(handler.songs[0].seconds * 1000).format("h:mm:ss", { trim: false })}`);return message.channel.send({embed});
//}
  
  if (command === 'dadjoke') {
    var jokes = [
    "What time did the man go to the dentist? Tooth hurt-y",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Want to hear a joke about a piece of paper? Never mind... it's tearable.",
    "I just watched a documentary about beavers. It was the best dam show I ever saw!",
    "If you see a robbery at an Apple Store does that make you an iWitness?",
    "Spring is here! I got so excited I wet my plants!",
    "A ham sandwich walks into a bar and orders a beer. The bartender says, \"Sorry we don’t serve food here.\"",
    "What’s Forrest Gump’s password? 1forrest1",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
    "What do you call a factory that sells passable products? A satisfactory.",
    "A termite walks into a bar and asks, \"Is the bar tender here?\"",
    "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
    "Two peanuts were walking down the street. One was a salted.",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    "How do you make holy water? You boil the hell out of it.",
    "A three-legged dog walks into a bar and says to the bartender, \"I’m looking for the man who shot my paw.\"",
    "When you ask a dad if he's alright: \"No, I’m half left.\"",
    "I had a dream that I was a muffler last night. I woke up exhausted!",
    "How do you tell the difference between a frog and a horny toad? A frog says, \"Ribbit, ribbit\" and a horny toad says, \"Rub it, rub it.\"",
    "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
    "5/4 of people admit that they’re bad with fractions.",
    "MOM: \"How do I look?\" DAD: \"With your eyes.\"",
    "What is Beethoven’s favorite fruit? A ba-na-na-na.",
    "What did the horse say after it tripped? \"Help! I’ve fallen and I can’t giddyup!\”",
    "Did you hear about the circus fire? It was in tents!",
    "Don't trust atoms. They make up everything!",
    "What do you get when you cross an elephant with a rhino? Elephino.",
    "How many tickles does it take to make an octopus laugh? Ten-tickles.",
    "What's the best part about living in Switzerland? I don't know, but the flag is a big plus.",
    "What do prisoners use to call each other? Cell phones.",
    "Why couldn't the bike standup by itself? It was two tired.",
    "What do you call a dog that can do magic? A Labracadabrador.",
    "Why didn't the vampire attack Taylor Swift? She had bad blood.",
    "NURSE: \"Blood type?\" DAD: \"Red.\"",
    "SERVER: \"Sorry about your wait.\" DAD: \"Are you saying I’m fat?\”",
    "What do you call a fish with two knees? A “two-knee” fish.",
    "I was interrogated over the theft of a cheese toastie. Man, they really grilled me.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Can February March? No, but April May!",
    "When you ask a dad if they got a haircut: \"No, I got them all cut!\"",
    "What does a zombie vegetarian eat? “GRRRAAAAAIIIINNNNS!”",
    "What does an angry pepper do? It gets jalapeño your face.",
    "Why wasn't the woman happy with the velcro she bought? It was a total ripoff.",
    "What did the buffalo say to his son when he dropped him off at school? Bison.",
    "What do you call someone with no body and no nose? Nobody knows.",
    "Where did the college-aged vampire like to shop? Forever 21.",
    "You heard of that new band 1023MB? They're good but they haven't got a gig yet.",
    "Why did the crab never share? Because he's shellfish."
];

//odule.exports.run = async (bot, message, args) => {

      var DAD = new Discord.RichEmbed()
      .setDescription(jokes[Math.floor(Math.random() * jokes.length)])

      .setColor("0x#FF0000")

      message.channel.send(DAD);

}
  
  if (command === 'remrole') {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pleb, you can't do that.");
    let user = message.mentions.users.first ()
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  //try{
    //await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  //}catch(e){
    message.channel.send(`I have removed the role \`${role}\` from \`${user.tag}\``) // We tried to DM them, but their DMs are locked.`)
 // }
}
  
  //f (command === 'prefix') {
     //if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Tou do not have correct perms to use this command");
 // if(!args[0] || args[0 == "help"]) return message.reply("Usage: `prefix <desired prefix here>`");

  //let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  //prefixes[message.guild.id] = {
   // prefixes: args[0]
  //};

 // fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
  //  if (err) console.log(err)
 // });

 // let sEmbed = new Discord.RichEmbed()
 // .setColor("#FF9900")
 // .setTitle("Prefix Set!")
  //.setDescription(`Set to ${args[0]}`);

 // message.channel.send(sEmbed);

//}
  
  if (command === 'lock') {
    if (!message.member.hasPermissions ("MANAGE_CHANNELS")) return message.channel.send ("You need to have `MANAGE_CHANNELS` permission to use this command!");
      if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  };
  }
  
  if (command === 'addrole') {
     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pleb, you can't do that.");
    let user = message.mentions.users.first ()
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  //try{
   // await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  //}catch(e){
    message.channel.send(`I have added the Role \`${role}\` to \`${user.tag}\`.`) // they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.
 // }
}
  
   // if (command === "lockdown") {
//  let time = args.join(' ');
 // let validUnlocks = ['release', 'unlock'];
 // if (!message.guild.member.hasPermission('ADMINISTRATOR')) return message.reply('you do not have the correct permissions.').catch(console.error);
 // if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
 // if (validUnlocks.includes(time)) {
   // message.channel.overwritePermissions(message.guild.id, {
   //   send_MESSAGES: null
  //  }).then(() => {
  //    message.channel.send('Lockdown lifted.');
  //    clearTimeout(bot.lockit[message.channel.id]);
   //   delete bot.lockit[message.channel.id];
  //  }).catch(error => {
  //    console.log(error);
 //   });
 // } else {
   // message.channel.overwritePermissions(message.guild.id, {
   //   send_MESSAGES: false
   // }).then(() => {
     // message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {
 
     //   bot.lockit[message.channel.id] = setTimeout(() => {
    //      message.channel.overwritePermissions(message.guild.id, {
  //          send_MESSAGES: null
     //     }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
  //        delete bot.lockit[message.channel.id];
   //     }, ms(time));
 
  //    }).catch(error => {
   //     console.log(error);
  //    });
  //  });
 // }
//};
  
  //const db = require('quick.db'); // npm i quick.db

//exports.run = (client, message, args) => {
 //if (command === 'autorole') {
  //if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You do not have permission to set server autorole!');
  //if (!args.join(' ')) return message.channel.send('Please provide a role name to set server autorole!');
  
 // db.set(`autorole_${message.guild.id}`, args.join(' ')).then(autorole => {
   // message.channel.send(`Server autorole has been set to ${autorole}`);
 //});
//}

 // const db = require('quick.db');

 // if (command === 'cat') {
   // const body = await superagent
  //  .get (`http://random.cat/meow`)
  //  const embed = new Discord.RichEmbed ()
  // "" .setColor ('RED')
  //  .addField ('Meow :cat:')
  //  .setImage (body.file)
  //  message.channel.send (embed)
 // }
  
//exports.run = (client, message, args) => {
 //if (command === 'prefix') {
 // if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You don\'t have permission to set server prefix.');
  //if (!args.join(' ')) return message.channel.send('Please provide a prefix to set server prefix.');
  
  //db.set(`serverPrefix_${message.guild.id}`, args.join(' ')).then(serverPrefix => {
  
    if (command === "8ball") {
    let question = args.join(' ');
    if (question.length < 1) return message.reply('You must supply a question for the 8ball.').catch(console.error);
      var ball = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
 
];
var balls = ball[Math.floor(Math.random() * ball.length)];
    message.channel.send("Question: " + question + " Answer: " + balls);
  }
  
  if (command === 'brainf') {
    if (message.author.id !== botOwner) return message.channel ("This command is only for devs")
    var brf = [
      "printf is python",
      "manure is just for Humans",
      "my token is ________",
      "**********",
      "Whotfisdave?",
      "karma is a bitch",
      "agree with the bot",
      "brainf = brainfuck",
      "//Works",
      "8173737229",
      `**TRUE OR FALSE** Channel is NSFW? Answer: ${message.channel.nsfw}`
      
      ];
    var brfs = brf[Math.floor (Math.random () * brf.length)];
    message.channel.send (`
Today's "brainf"\n` +
   brfs)
  }

  //f (command === "channel-info") {
   // let chnl = message.channel;
   // const embed = new Discord.RichEmbed ()
    //.setTitle ("Channel Info")
    //addField ("Channel Name", `${message.channel.name}`)
  //  .addField ("Channel Id", `${message.channel.id}`)
   // .addField ("Is Channel NSFW?", `${message.channel.nsfw}`)
   // .addField ("Channel Topic", `${message.channel.topic}`)
  
    //message.channel.send (embed)
  
  if (command === 'channel-info') {
let chnl = message.channel;
//et chnl = message.guild.channels.find (channel => channel.name = cnl);
//nl) return message.reply ("Please enter a valid channel name and make sure you do not mention the channel!");

const infobed = new Discord.RichEmbed()
.setTitle (`Channel's Info`)
.addField ("Channel Name", chnl.name)
.addField ("Channel ID", chnl.id)
.addField ("Is channel nsfw?", chnl.nsfw ? 'This is a NSFW channel' : 'This is not a NSFW channel')
.addField ("Channel Topic", chnl.topic)
.setColor ("GREEN");

//const errorbed = new Discord.RichEmbed()
//.setFooter ("This channel does not exist")
//.setColor ("RED");

//if (!chnl) infobed = err
    chnl.send (infobed)
//console.log (`"${message.author.tag}" just used the channel-info command in "${message.channel}" in "${message.guild}" !`)
}
  
  //if (command === 'gif') {
   // if (!args.join (" ")) return message.channel.send ("# Please provide a name of the gif you would like to get!", {code: "md"})
  //  const res = await got (`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join (" "))}`, {json: true})
//if (!res || !res.body || res.body.data) return message.channel.send ("Unable to find the gif matching your Query")
// const embed = new Discord.RichEmbed ()
//.setImage (res.body.data.image_url)
//.setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
//}
  
  
  
  if (command === 'ud') {
    if (!args.join (" ")) return message.channel.send ('Please enter a word so that i can search it on urban dictionary');
    
    var search = urban (args.join (" "))
    search.first (function (json) {
      if (!json) return message.channel.send ('I am unable to find the meaning of the given worf in urban dictionary')
      
      message.channel.send (`
**Definition of __${json.word}__**
\`\`\`${json.definition}\`\`\`
**Example**
\`\`\`${json.example}\`\`\`
**Author**:- ${json.author}
**Likes __${likes}__ | Comments __${comments}__** `)
    })
    }
  
  if (command === 'ascii') {
  const figlet = require('figlet'); // npm i figlet

//exports.run = (client, message, args) => {
  if (!args.join(' ')) return message.channel.send('Please provide text!');
  figlet(args.join(' '), (err, data) => {
    message.channel.send(data, { // send the output to the channel
      code: 'ascii'
    });
  });
}

     if (command === "roast") {
    //if (!message.channel.nsfw) return message.channel.send ("Use this command only in a NSFW Channel!")
    let user = message.mentions.users.first ();
    //   if (user.bot) return message.channel.send ("I will never roast my bot friends!")
      // let user = message.mentions.users.first();
       let roasty = message.mentions.users.size
      if (roasty < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
      var roast = [
                "Were you born on the highway? That is where most accidents happen.",
                "I was going to give you a nasty look... but I see you already have one.",
                "Remember when I asked for your opinion? Me neither.",
                "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
                "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
                "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
                "Two wrongs don't make a right, take your parents as an example.",
                "Just looking at you, I now understand why some animals eat their young offspring.",
                "Does time actually fly when you're having sex, or was it just one minute after all?",
                "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
                "This is why you dont have nice things",
                "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
                "You're IQ's lower than your dick size.",
                "Are you always such an idiot, or do you just show off when I’m around?",
                "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
                "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
                "You’re about as useful as a screen door on a submarine.",
                "You always bring me so much joy—as soon as you leave the room.",
                "Stupidity’s not a crime, so feel free to go.",
                "If laughter is the best medicine, your face must be curing the world.",
                "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
                "It looks like your face caught fire and someone tried to put it out with a hammer.",
                "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
                "Why is it acceptable for you to be an idiot but not for me to point it out?",
                "You're so fat you could sell shade.",
                "Your family tree must be a cactus because everyone on it is a prick.",
                "You'll never be the man your mother is.",
                "Just because you have an ass doesn't mean you need to act like one.",
                "Which sexual position produces the ugliest children? Ask your mother she knows.",
                "If I had a face like yours I'd sue my parents.",
                "The zoo called. They're wondering how you got out of your cage?",
                "Hey, you have something on your chin... no, the 3rd one down.",
                "Aww, it's so cute when you try to talk about things you don't understand.",
                "You are proof that evolution can go in reverse.",
                "Brains aren't everything. In your case they're nothing.",
                "You're so ugly when you look in the mirror, your reflection looks away.",
                "I'm sorry I didn't get that - I don't speak idiot.",
                "It's better to let someone think you're stupid than open your mouth and prove it.",
                "Were you born this stupid or did you take lessons?",
                "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
                "Don't you get tired of putting make up on two faces every morning?",
                "Hey, I'm straighter than the pole your mom dances on.",
                "If ugliness were measured in bricks, you would be the Great Wall of China.",
                "I thought I said goodbye to you this morning when I flushed the toilet",
                "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
                "Zombies are looking for brains. Don't worry. You're safe.",
                "spreading rumors? At least you found a hobby spreading something other than your legs.",
                "i would tell you to eat trash but that’s cannibalism",
                "If you spoke your mind, you would be speechless",
                "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
                "Acting like a dick won't make yours any bigger",
                "If I wanted to hear from an asshole, I would have farted",
                "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
                "You remind me of a penny, two faced and worthless!",
                "I've met some pricks in my time but you my friend, are the f*cking cactus",
                "I'd slap you, but that would be animal abuse",
                "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
                "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
                "You're so dumb, your brain cell died of loneliness",
                "You shouldn't let your mind wander..its way to small to be out on its own",
                "I don't know what makes you so dumb, but its working",
                "You should put the diaper on your mouth, that's where the craps comin' out.",
                "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
                "Could you go away please, I'm allergic to douchebags",
                "If you had any intelligence to question I would have questioned it already.",
                "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
                "I would answer you back but life is too short, just like your d*ck",
                "Mirrors don't lie. Lucky for you, they can't laugh either.",
                "I was right there are no humans in this channel",
                "You have a face not even a mother could love....",
                "You know what I would find if I looked up idiot in the dictionary a picture of you?",
                "You make the guys on Jackass look like Einstein.....",
                "I would slap you but I don't want to make your face look any better",
                "Sorry, I can't put small objects in my mouth or Ill choke",
                "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
                "Have you been shopping lately? They're selling lives at the mall, you should get one"
 
];
var roasts = roast[Math.floor(Math.random() * roast.length)];
    message.channel.send(user.username + " " + roasts);
  }
  
  //f (command === 'empic') {
   // if (!args.join (' ')) return message.channel.send ("Please Enter a image link");
    //const embed = new Discord.RichEmbed
 //  // .setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
   // .setColor ('GREEN')
  //  .setImage (' ', content)
   // message.channel.send (embed)
  //}
  
 // if (command === 'avatar') {
  //  constuser = message.mentions.users.first () || message.author;
    //embed
    //let embed = new Discord.RichEmbed
   // .setAuthor (`${user.username}`, user.displayAvatarURL)
    //.setImage (user.displayAvatarURL)
   // message.channel.send (embed)
 // }
  
  //if (command === 'eval') {
// if (message.author.id !== "406300208910041098") return message.channel.send ("This command is for bot devs only!");
 //if (message.author.id === "406300208910041098") return
 // message.channel.send ("```1,2,3 = true```")
  //}
  
 if(command === 'eval') {
if(message.author.id !== botOwner) return message.channel.send ("This command is only for Bot Devs!");

try {

const code = args.join(" ");

let evaled = eval(code);

if (typeof evaled !== "string")

evaled = require("util").inspect(evaled);

message.channel.send(clean(evaled), {code:"xl"});

} catch (err) {

message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);

}

}
  
  if (command === 'reload') {
  if (message.author.id !== botOwner) return message.channel.send ("This command is only for devs!");
    //if (!args.join (` `)) return;
    let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage(`I cannot find the command: ${args[0]}`);
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Successfully reloaded: ${command}`);
          })
          .catch(e => {
            m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  };
  }
  // if(command === 'accept') {
   // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, my assistant won't let me do that!")
  //  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //  let content = message.content.split(" ").slice(2).join(" ");
   // const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
   // if(!content) content = "No comment provided"
   // if(!user) return message.channel.send("Please mention a user.")
   // if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That user is already an admin.")
    // console.log(num1)
   // const embed = new Discord.RichEmbed()
   // .setTitle("**Application Accepted!**")
  //  .setDescription("Congrats! Your application was accepted! You have got your 7 day Trial Mod!")
   // .setTimestamp()
  //  .setColor("GREEN")
   // .addField("Comments", content)
   // .addField(content)
  //  const logembed = new Discord.RichEmbed()
  //  .setTitle("**Application Accepted**")
  //  .setColor("GREEN")
  //  .setThumbnail(user.user.avatarURL)
  //  .addField("User", user.user.username)
   // .addField("Accepted By", message.author.username)
     
   
 //   user.send(embed)
  //  modlog.send(logembed)
 //   message.channel.send("**Succsessfull :white_check_mark: **")
   // message.delete().catch(O_o=>{});
  //  message.delete(10000)
 // 
  
  if (command === 'clog') {
  let log = args.join (` `)
    if (message.author.id !== botOwner) return message.channel.send ("Command only for devs!")
  //} else 
    if (!log) return message.channel.send ("Args missing...");
    //Try this now
    console.log (log)
    message.channel.send ("Logged!")
  }
  
 if(command === "decline") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, my assistant won't let me do that!")
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let content = message.content.split(" ").slice(2).join(" ");
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    if(!content) content = "No comment provided"
    if(!user) return message.channel.send("Please mention a user.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That user is already an admin.")
   
 
      const embed = new Discord.RichEmbed()
    .setTitle("**Application Declined...**")
    .setDescription("Your staff application was declined...")
    .setTimestamp()
    .setColor("RED")
    .addField("Reason", content)
      .addField ("By", `${message.author.tag}`)
    //addField(content)
    const logembed = new Discord.RichEmbed()
    .setTitle("**Application Declined**")
    .setColor("RED")
    .setThumbnail(user.user.avatarURL)
    .addField("User", user.user.username)
    .addField("Declined By", message.author.username)
    .addField("Reason", content)
   
    user.send(embed)
    modlog.send(logembed)
    message.channel.send("**Succsessfull :white_check_mark: **")
    message.delete().catch(O_o=>{});
  message.delete(10000)
  }
  
  //if (command === 'userinfo') {
    //const embed = new Discord.RichEmbed
   // .setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
   // message.channel.send (embed)
  
  if (command === 'avatar') {
  let user = message.mentions.users.first () || message.author;
    const embed = new Discord.RichEmbed()
    .setAuthor (`${user.tag}'s Avatar`, user.displayAvatarURL)
    .setTitle ('Avatar')
    .setImage(user.displayAvatarURL)
    message.channel.send (embed)
  }
   
 // if (command === 'ui') command = 'userinfo';
  
  if (command === 'user-info') {
    let bug = message.mentions.users.first () || message.author;
    let user = message.mentions.members.first () || message.member;
    const embed = new Discord.RichEmbed ()
    .setAuthor (`${bug.tag}`, bug.displayAvatarURL)
    .setThumbnail (bug.displayAvatarURL)
   // .addField ("Status", user.status)
    .addField ("User is a Bot?", bug.bot ? 'User is a bot' : 'User is not a bot')
    .addField ("Registered At", `${bug.createdAt}`)
    .addField ("Joined Server At", `${user.joinedAt}`)
    .addField ("ID", `${user.id}`)
    .addField ("Status", `${user.presence.status}`)
    //.addField ("Highest role", `${member.user.highestRole}`)
    .addField ("Highest Role", `${user.highestRole}`)
  
message.channel.send (embed)
}
  
  if (command === 'perms') {
    let ser = message.mentions.members.first () || message.member;
    const perms = new Discord.RichEmbed ()
    .setTitle (`${ser.nickname}'s Permissions`)
    .setDescription  (ser.permissions) 
    message.channel.send (perms)
  }
  
  if (command === 'attach') {
    let attach = args.join (` `)
    if (!attach) return message.channel.send ("Please provide a link");
    const file = new Discord.RichEmbed ()
    .attachFile (attach)
    message.channel.send (file)
  }
  
  if (command === 'empic') {
    let pic = args.join (` `)
    if (!pic) return message.channel.send ("Please provide a link so that i can embed and send it!");
    const picbed = new Discord.RichEmbed ()
    .setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
    .setImage (pic)
    .setColor ('GREEN')
    message.channel.send (picbed)
  }
           
  if (command === 'report') {
    let reported = message.guild.member (message.mentions.users.first () || message.guild.members.get (args [0]));
    if (!reported) return message.channel.send ("Please mention a user to report them!");
    let content = message.content.split (" ").slice (2).join (" ");
    const reports = message.guild.channels.find (channel => channel.name === 'reports');
    if (!content) return message.channel.send ("Please provide a reason!");
    const embed = new Discord.RichEmbed ()
    .setTitle ('#New Report')
    .setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
    .addField ("Reported User", reported)
    .addField ("Reported By", message.author.tag)
    .addField ("Reason", content)
    .setThumbnail (reported.displayAvatarURL)
    .setTimestamp ()
    reports.send (embed)
    message.channel.send ("✅ I have reported that user!")
  }
  
  if(command === 'accept') {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, my assistant won't let me do that!")
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let content = message.content.split(" ").slice(2).join(" ");
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    if(!content) content = "No comment provided"
    if(!user) return message.channel.send("Please mention a user.")
    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That user is already an admin.")
    // console.log(num1)
    const embed = new Discord.RichEmbed()
    .setTitle("**Application Accepted!**")
    .setDescription("Congrats! Your staff application was accepted! You have got your 7 day Trial Mod!")
    .setTimestamp()
    .setColor("GREEN")
    .addField("Comments", content)
    .addField ("By", `${message.author.tag}`)
    const logembed = new Discord.RichEmbed()
    .setTitle("**Application Accepted**")
    .setColor("GREEN")
    .setThumbnail(user.user.avatarURL)
    .addField("User", user.user.username)
    .addField("Accepted By", message.author.username)
     
   
    user.send(embed)
    modlog.send(logembed)
    message.channel.send("**Succsessfull :white_check_mark: **")
    message.delete().catch(O_o=>{});
    message.delete(10000)
  }
  
  if(command === "demote") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, my assistant won't let me do that!")
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let content = message.content.split(" ").slice(2).join(" ");
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    if(!content) content = "No comment provided"
    if(!user) return message.channel.send("Please mention a user.")
    if(!user.hasPermission("KICK_MEMBERS")) return message.channel.send("That user is not a mod.")
    
  
      const embed = new Discord.RichEmbed()
    .setTitle("**Demoted**")
    .setDescription("You were demoted  and you are no longer a staff member.")
    .setTimestamp()
    .setColor("RED")
    .addField("Reason", content)
      .addField ("By", `${message.author.tag}`)
    const logembed = new Discord.RichEmbed()
    .setTitle("**User Demoted**")
    .setColor("RED")
    .setThumbnail(user.user.avatarURL)
    .addField("User", user.user.username)
    .addField("Demoted By", message.author.username)
    .addField("Reason", content)
    
    user.send(embed)
    modlog.send(logembed)
    message.channel.send("**Succsessfull :white_check_mark: **")
    message.delete().catch(O_o=>{});
  message.delete(10000) 
  }
  
   if(command === "bal") {
     let coinEmbed1 = new Discord.RichEmbed()
     .setAuthor(message.author.tag)
    .setColor(Math.floor(Math.random() * 16777214) + 1,)
    .addField(`${message.author.tag}'s balance`,`You currently have ${coins[message.author.id].coins} blackdollars!`)
 
     message.channel.send(coinEmbed1)
   
   
     }
 if(command == "randomnum") {
   const embed = new Discord.RichEmbed()
   .setTitle("Here is your random number!")
   .setDescription(Math.floor(Math.random() * 100000000) + 1)
   .setColor("RANDOM")
   message.channel.send(embed)
 }
  if(command === "work") {
   try {
   let worklog = client.channels.get('696969696969696969') // MODIFY - This is used to log any work processed & if failed logged as well.
   let cooldown = 2.88e+7; //8 Hours in ms
   let amount = Math.floor((Math.random() * 100) + 100); // Cost
   let workplace = ["Office", "Mall", "Restaurant", "Market", "Security", "ICT"] // Different outputs match below, from 0 to 5 with an included error system.
   let workDaily = await db.fetch(`workDaily_${message.author.id}`) // Used for fetching the time on when work is available.
   let result = Math.floor((Math.random() * workplace.length))
   let timeObj = ms(cooldown - (Date.now() - workDaily))
   
   let workEmbed = new Discord.RichEmbed()
   .setDescription(`**${message.author.tag}** Started working and got payed ${currencyFormatter.format(amount, { code: 'USD' })}`)
   .setColor(`GREEN`)
 
   let dailytEmbed = new Discord.RichEmbed()
   .setDescription(`${message.author.tag} Trying to work but it's on cooldown! Time Left: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
   .setColor(`RED`)
 
   
   try {
   db.fetch(`currency_${message.author.id}`).then(rm => { // MODIFY - This checks your account to see if your account has a valid amount
   if(rm == null || 0){
       db.set(`currency_${message.author.id}`, 50)} // MODIFY - This wipes any data & updates the account if it isn't a valid number
 
   else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) {
       
 
       let workDailyEmbed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag} || Work in cooldown!`, message.author.displayAvatarURL)
       .setColor(`BLUE`)
       .setDescription(`**${message.author.tag}**, You've just worked 6 hours!\nYou require rest for, **6h, 00m**`)
       message.channel.send(workDailyEmbed)
     send(worklog, dailytEmbed, {
         name: "Manager",
         icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
      })
    } else if (`${result}` == "0"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Finished Accounting`, message.author.displayAvatarURL)
            .setColor(`ORANGE`)
            .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
           message.channel.send(dailyEmbed)
           send(worklog, workEmbed, {
               name: "Manager",
               icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
           })
       })}
   else if (`${result}` == "1"){
       db.set(`workDaily_${message.author.id}`, Date.now());
       db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
           var discord = require('discord.js')
           let dailyEmbed = new discord.RichEmbed()
           .setAuthor(`${message.author.tag} Sold A Lot Of Clothes`, message.author.displayAvatarURL)
           .setColor(`#FFFFCC`)
           .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "2"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Finished Cooking & Cleaning`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
           message.channel.send(dailyEmbed)
           send(worklog, workEmbed, {
               name: "Manager",
               icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
           })
       })}
   else if (`${result}` == "3"){
       db.set(`workDaily_${message.author.id}`, Date.now());
       db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
           var discord = require('discord.js')
           let dailyEmbed = new discord.RichEmbed()
           .setAuthor(`${message.author.tag} Sold A Few Melons`, message.author.displayAvatarURL)
           .setColor(`RED`)
           .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "4"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Finshed Protecting People`, message.author.displayAvatarURL)
            .setColor(`BLACK`)
            .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
           message.channel.send(dailyEmbed)
           send(worklog, workEmbed, {
               name: "Manager",
               icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
           })
       })}
   else if (`${result}` == "5"){
       db.set(`workDaily_${message.author.id}`, Date.now());
       db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
           var discord = require('discord.js')
           let dailyEmbed = new discord.RichEmbed()
           .setAuthor(`${message.author.tag} Just Crushed Some Coding Bugs`, message.author.displayAvatarURL)
           .setColor(`AQUA`)
           .addField(`You've been payed for your shift,`, `The Manager Paid You: ${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
          send(worklog, workEmbed, {
              name: "Manager",
              icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
          })
        })}
    else {
        message.channel.send(`Oof.. you've hit a massive error. Please send a report in, \`-!support <work> <error>\``)
       console.log(result)
   }
   })} catch(err) {console.log(err)}
   } catch(err) {console.log(`Error with work \n${err}`)}
}
  
if(command == "slot") {
      var replys1 = [
	        ":gem: : :gem: : :gem: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":star: : :star: : :star: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: "
	    ];
	    let reponse = (replys1[Math.floor(Math.random() * replys1.length)])

	    var replys2 = [
	        ":gem: : :gem: : :gem: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: ",
	        ":gem: : :cherries: : :cherries:",
	        ":gem: : :bell: : :star:"
	    ];
	    let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
	    var replys3 = [
	        ":lemon: : :lemon: : :lemon: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":star: : :star: : :star: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: "
	    ];
	    let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

	    const embed = new Discord.RichEmbed()
	        .setColor("#FE0101")
	        .setTitle(`${message.author.username}, **Here is your result,**`)
	        .addField("**-------------------**", "** **")
	        .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
	        .addField("**-------------------**", "** **")
	        .setDescription("** **")
          .setFooter(`${client.user.tag}`)
	    message.channel.send(embed)
   }
 
  //f(command === "test") {
   // if (!message.member.hasPermission ("MANAGE_MESSAGES")) return send (message.channel, "Test", {
  //  name: 'Tiger Wolve',
   //  icon: 'https://cdn.discordapp.com/avatars/406300208910041098/24266df68d31aa878b002209bf6d3b8e.png?size=256' 
   // })

  //f (command === "myavatar") {
    //let avatar = message.author.displayAvatarURL
    
    //  const embed = new Discord.RichEmbed
     // .setAuthor (`${message.author.tag}`, message.author.displayAvatarURL)
     // .setTitle ("Avatar")
    //  .setImage (message.author.displayAvatarURL)
     // }
  
  if(command === "warn") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return send(message.channel, "Sorry, but you do not have permissions to use this command!", {
        name: 'Evil Tiger\'s Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return send(message.channel, "Couldn't find user.", {
        name: 'Evil Tiger\'s Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    if (user.hasPermission("KICK_MEMBERS")) return send(message.channel, "I cannot warn this user!", {
        name: 'Evil Tiger\'s Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return send(message.channel, 'Please specify a reason for the warn!', {
        name: 'Evil Tiger\'s Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    




    if (!modlog) return message.channel.send('**Please create a channel with the name `mod-log`**')


    if (user) {

        const embed = new Discord.RichEmbed()
            .setTitle('**Warn**')
            .addField('Moderator', `${mod}`)
            .addField('User', `<@${user.id}>`)

            .addField('Reason', `${reason}`)
            .setColor('#FFFF00')
            .setTimestamp()
            .setThumbnail(user.AvatarURL)
            .setFooter(`ID ${user.id}`)
        send(modlog, embed, {
            name: 'Evil Tiger\'s Logger',
            icon: 'https://cdn.discordapp.com/attachments/476004620544770059/476244871120945173/image.jpg'
        })
        send(message.channel, 'I have warned the person and logged it!', {
            name: 'Evil Tiger\'s Assistant',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })
        user.send(`**You have been warned in ${message.guild.name} by ${message.author.username}, for: \`${reason}\`**`)


    }
}

 if(command === "esay") {
 if (!message.member.hasPermissions ("MANAGE_SERVER")) return message.reply ("You should have MANAGE SERVER permissions in order to use this command!");
   if (!args.join (' ')) return message.channel.send ('Please enter something so that i can create a embed of it');
 const embed = new Discord.RichEmbed ()
   .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
   // .setThumbnail(user.AvatarURL)
    .setDescription (args.join (' '))
   .setColor ('GREEN')
  message.delete ().catch (O_o=>{});
 message.channel.send (embed)
 }
  
  if (command === "info") {
    const embed = new Discord.RichEmbed ()
    .setAuthor (`Bot Info`)
    .setDescription ("Hey, Hi there I am EvilTiger\\™. I was created by **Tiger Wolve\\™ٴ#7067 and UnknownSloth#5107** only for **Dragon Hub\\™** server but as you now can see i am Public. If you are looking for my server support please check the links below. I know that i do not have much commands as i am still in development but do not worry i am learning many things now! I can get the Best and fresh memes (not out of <a:DHDiscordButt_ocks:446436556388171777>) by doing `!!meme`, Say your message in embed by doing `!!esay <text>`, give random slots by `!!slot` And I can DM any user you want like `!!dm @user <text>` :wink:")
    //**─────•Bot links•─────**

//Support](https://discordapp.com/invite/hn5FK2e)
                     //Website](https://tiger-wolve.enjin.com)
//Invite me](https://discordapp.com/oauth2/authorize?client_id=476957933637206031&scope=bot&permissions=500559086)"
    .setColor ('#7892da')
    name: 'Tiger Wolve';
    icon: 'https://cdn.discordapp.com/avatars/406300208910041098/24266df68d31aa878b002209bf6d3b8e.png?size=256'
                message.channel.send (embed)
  }
  
  if(command === "poll") {
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 100000}));
  
  const embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
   .setDescription(`<:DHYes:477742518197551104> Yes | <:DHexclamation:480579983375466517> Maybe | <:DHNo:477742275003416576> No`)
    .setFooter('React to vote on Poll!')
    .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`477742518197551104`);
      await pollTitle.react (`480579983375466517`);
      await pollTitle.react(`477742275003416576`);
  
    const filter = (reaction) => reaction.emoji.name === '<:DHYes:477742518197551104>';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
    const filter1 = (reaction) => reaction.emoji.name === '🔽';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
  
};


 if(command === "mute") {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I cannot mute this user!");
    let muterole = message.guild.roles.find(`name`, "Muted");
    
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#ffffff",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");
 const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
   const logembed = new Discord.RichEmbed()
   .setTitle("**User muted**")
   .setThumbnail(tomute.user.avatarURL)
   .setColor("#FFFF00")
   .setTimestamp()
   .addField("Moderator", message.author.username)
   .addField("Muted user", tomute.user.username) 
   .addField("Mute time", ms(ms(mutetime)))
   
    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
   send(modlog, logembed, {
            name: 'Evil Tiger\'s Logger',
            icon: 'https://cdn.discordapp.com/attachments/476004620544770059/476244871120945173/image.jpg'
        })

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

 }

  
  if(command === "rolecolor") {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permssion MANAGE_ROLES to use this !").then(msg => msg.delete(6000));
  

let role = message.mentions.roles.first() || message.guild.roles.find('name', args[0]);
if(!role) return message.channel.send("You forgot to type or mention a role!");

let color = args.slice(1).join(" ");
if(!color) return message.channel.send("You forgot to type a color hex!");

await role.setColor(color).catch(error => message.channel.send(`Error: ${error}`));
await message.channel.send(`\`${role.name}\`'s color was changed to ${role.color}`).catch(error => message.channel.send(`Error: ${error}`));
};
  
if (command === "bee") {
 const bee = args.join (" ")
  message.author.send(bee);
}
  
  if (command === "server-info") {
    let sicon = message.guild.iconURL;
  
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
       let emojis;
        if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
  else emojis = message.guild.emojis.map(e => e).join(' ')
  
 message.channel.startTyping();
  
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Server Information**")
    .setURL("https://www.discordapp.com/invite/hn5FK2e")
    .setColor('RANDOM')
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined On", message.member.joinedAt)
    .addField('Region',`${message.guild.region}`)
    .addField('ID', message.guild.id)
    .addField("Total Members", message.guild.memberCount)
    .addField("Verification Level", message.guild.verificationLevel)
    .addField("Owner", `${message.guild.owner}`)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size)
    .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Online", online.size, true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Emojis", emojis)
    .setFooter(`Server Created • ${day}/${month}/${year}`)
  
  message.channel.send(serverembed)
  message.channel.stopTyping(true);
}
  
  
  if(command === 'meme') {
    meme(function(memey) {
  const embed = new Discord.RichEmbed()
  .setTitle(memey.title[0])
  .setColor("RANDOM")
  .setImage(memey.url[0])
  .setFooter(`Likes: ${likes} | Comments: ${comments}`)
  
  message.channel.send(embed);
  })};
  
  //if (command === 'urban') {
 //   if (!args.join (" ")) return message.channel.send ("Please provide a word so that i can get you the Defination for it");
    
 //   var search = urban (args.join (" "))
  //  search.first (function (json)
     // if (!json) return message.channel.send ("Error! I can not find the defination for the given word");}
     // const embed = new Discord.RichEmbed ()
   //   .addField ("Word", `${json.word}`)
    //  .addField ("Defination", `${json.defination}`)
  //    .addField ("Author", `${json.author}`)
   //   .addField ("Example", `${json.example}`)
  //    .setFooter (`Likes: ${likes} | Comments: ${comments}`)
   //   message.channel.send (embed)
   // }

 // if(command === "help") {
    //  const embed = new Discord.RichEmbed()
   // .setTitle("**Help Menu**")
    //.setColor("#353942")
    //.addField("》Support Server","[💻Click here](https://discordapp.com/invite/hn5FK2e)")
  //  .addField("》Utility Commands","`ping`, `avatar`, `stats`, `invite`, `esay`, `say`, `info`, `myavatar`, `create-invite`, `server-info`")
    //.//addField("》Fun Commands", "`meme`, `generatenum`, `randomnum`, `mail`, `dm`, `slot`")
    //.addField("》Emoji commands", "`butt`, `hug`, `tada`, `tick`, `cross`, `gg`")
    //.addField ("》Staff Management", "`demote`, `accept`, `decline`")
    //.addField("》Moderation Commands", "`purge`, `kick`, `ban`, `logchannel`, `rolecolor`, `warn`, `mute`, `poll`")
  //  .addField ("》Developer Commands", "`eval`, `status`, `restart`, `brainfuck`")
   // .setFooter(`Requested By: ${message.author.tag}`)
    
 //   message.author.send("**Here is a list of my commands!**", embed)
 // message.channel.send ("**Check your DMs! :incoming_envelope:**")
    //message.react ('477742518197551104')
//  }

  // if(command === "help"const embed = new Discord.RichEmbed()
// .setTitle("**Help Menu**")
   //  .setColor("#353942")
//.addField("🌎 Support Server","[💻Click here](https://discordapp.com/invite/hn5FK2e)")
//.addField("⚙ Utility Commands","`ping`, `avatar`, `stats`, `invite`, `esay`, `say`, `info`, `avatar`, `channel-info`, `create-invite`, `server-info`")
//.addField("<:DHhitting_a_yeet:438319220007370752> Fun Commands", "`ascii`, `meme`, `generatenum`, `randomnum`, `mail`, `dm`, `slot`")
//.addField("<:DHBlobEat:474788778939121667> Emoji commands", "`butt`, `hug`, `tada`, `tick`, `cross`, `gg`")
//.addField ("<:DHexclamation:480579983375466517> Staff Management", "`demote`, `accept`, `decline`")
//.addField("<:DHblobnomstaff1:446437002078978052> Moderation Commands", "`purge`, `kick`, `ban`, `logchannel`, `rolecolor`, `warn`, `mute`, `poll`")
//.addField ("<:DHaw_yeah:472815592873787402>  Developer Commands", "`eval`, `status`, `restart`, `brainfuck`")
//.setFooter(`Requested By: You!`)

   //  message.author.send("**Here is a list of my commands!**", embed)
//age.channel.send ("**Check your DMs! 📨**")
   //  await message.reaact ('477742518197551104')
 //}
  
  if (command === "help") {
const embed = new Discord.RichEmbed ()

.addField("⚙ Utility Commands", `
**ping** - Check Bot Latency
**avatar** - Get Someone's or your avatar
**stats** - Check Bot Stats
**invite** - Get a Link to invite the bot
**esay** - Sends given message in embed
**say** - Says your message
**info** - Bot Info
**channel-info** - Get the current channel info
**server-info** - Get the server's info 
**role-info** - Get a role's info
**user-info** - Get a user's info
**attach** - Attach a file using the bot
**empic** - Embed a image using the bot
**report** - Report a user to the server staff!
**remind-me** - add reminders to be remined
**calc** - Calculates the given equation and returns correct answer `)
.setColor("#7892DA")

const embed2 = new Discord.RichEmbed ()

.addField("<:DHhitting_a_yeet:438319220007370752> Fun Commands", `
**ascii** - Transforms your text into ascii
**meme** - Get a random meme
**emojify** - Emojify your text
**reverse** - Reverse your text
**generatenum** - Generates a random number 
**randomnum** - Get a random Number
**mail** - Mails your message to anyone
**dm** - DMs your message to Anyone
**roast** - Insult someone by mentioning them
**slot** - Get a random slot 
**dadjoke** - Get a random dad joke!
**cowsay** - Make the cow say your text
**killme** - Kill yourself with this command
**hook** - Send your text in webhook
**ehook** - Send your text in embeded webhook`)
.setColor("#7892DA")

const embed3 = new Discord.RichEmbed ()

.addField("<:DHBlobEat:474788778939121667> Emoji commands", `
**butt** - Get A Butt Emoji
**hug** - Get a blob hug emoji 
**tada** - Get a HyperTada Emoji
**tick** - Get a tick Emoji 
**cross** - Get a cross emoji
**gg** - Drop GGs `)
.setColor("#7892DA")

const embed4 = new Discord.RichEmbed ()

.addField ("<:DHexclamation:480579983375466517> Staff Management", `
**demote** - DMs the user the news that they were demoted
**accept** - DMs the user the news that their staff app was acccpeted
**decline** - DMs the user the news that their staff app was declined`)
.setColor("#7892DA")

const embed5 = new Discord.RichEmbed ()

.addField("<:DHblobnomstaff1:446437002078978052> Mod Commands", `
**purge** - Deletes the given amount of messages 
**kick** - Kick Someone
**ban** - Ban Someone 
**unban** - Unban Someone
**rolecolor** - Set's color of a role 
**warn** - Warn a user
**mute** - Mutes the user for given time
**poll** - Generates a poll with given words as the title
**lock** - Lockdown a channel for a given duration
**addrole** - Add a role to the mentioned user
**remrole** - Remove a role from the mentioned user `)
.setColor("#7892DA")


message.author.send ("Here is a list of my all commands", embed)

message.author.send (embed2)

message.author.send (embed3)

message.author.send (embed4)

message.author.send (embed5)
    
message.channel.send ("**Check Your DMs!**📨")

}
  
  if (command === "tick") {
    message.channel.send ('<:DHYes:477742518197551104>')
  }
  
  if(command === "cross") {
    message.channel.send ('<:DHNo:477742275003416576>')
  }
  if(command === "invite") {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
.addField ("Invite The bot to your server", "[Click here](https://discordapp.com/oauth2/authorize?client_id=484333555514605570&scope=bot&permissions=500559086)")
 message.channel.send(embed)
}
  
        if(command === "mail") {
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let content = message.content.split(" ").slice(2).join(" ");
    if(!content) return send(message.channel, "Please enter something to send to the user.", {
        name: 'EvilTiger\'s Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    if (!user) return send(message.channel, "Couldn't find user to mail.", {
        name: 'EvilTiger\'Assistant',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    
    
    const modlog = message.guild.channels.find(channel => channel.name === log);
    const embed = new Discord.RichEmbed()
    .setTitle("**You got mail! :mailbox_with_mail:**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setDescription(`From ${message.author.username}`)
    .addField("Content", content)
    .setFooter(`From ${message.author.username} => ${user.user.username}`)
    
     const logembed = new Discord.RichEmbed()
    .setTitle("**A mail was sent :mailbox_with_mail:**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField("From", message.author.username)
    .addField("To", user.user.username)
    .addField("Content", content)
    .setTimestamp()
    
    user.send(embed)
    message.channel.send("**Mail sent! :white_check_mark: **")
    message.delete().catch(O_o=>{});
    message.delete(10000) 
    send(modlog, logembed, {
            name: 'EvilTiger\'s Logger',
            icon: 'https://cdn.discordapp.com/attachments/476004620544770059/476244871120945173/image.jpg'
        })
     
}
  if(command == "logchannel") {
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.reply("Please enter a channel name!")
    
    log = sayMessage
    message.channel.send(`The log channel has been changed to #${log}`)
  }
  
  if(command === "dm") {
     let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let content = message.content.split(" ").slice(2).join(" ");
    if(!user) return message.channel.send("Please mention a user!")
    if(!content) return message.channel.send("Please enter some content!")
    user.send(content)
    message.delete().catch(O_o=>{}); 
  }

    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "stats") {
    const m = await message.channel.send ("Stats?");
    m.edit(`**Bot Stats**
Servers - ${client.guilds.size}
Channels - ${client.channels.size}
Users - ${client.users.size}
Latency - ${m.createdTimestamp - message.createdTimestamp}ms`);
  }
  if(command === "gg") {
  message.channel.send ('<:DHgg:477742741334392832>');
  }
                        
 if(command === "say") {
 // if (!member.member.hasPermission ("MENTION_EVERYONE")) return message.reply("Sorry but you need the permissions to mention everyone to use this command")
   // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
  if (!message.member.hasPermissions ("MANAGE_SERVER")) return message.reply ("You are needed to have the \"MANAGE SERVER\" permissions to use this command!")
   // To get the "message" itself we join the `args` back into a string with spaces: 
 const sayMessage = args.join(" ")
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
 message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
   message.channel.send(sayMessage, {disableEveryone: true});
 }
  
   if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? or Check that Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if (command === 'unban') {
    
  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.hasPermission ("BAN_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "generatenum") {
    var randomshit = Math.floor(Math.random() * 100000000) + 1
    message.channel.send(randomshit)
  }
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 0 || deleteCount > 1000)
      return message.reply("Please provide a number between 1 and 1000 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  
});

function clean (text) {
  if (`type of (text) === "String"`)
  return text.replace (/`/g, "`" + String.fromCharCode (8203)).replace (/@/g, "@" + String.fromCharCode (8203));
  else
    return text;
}

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 250000);
client.login (Bot.TOKEN)
