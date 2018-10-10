# Adding a channel-info command is very easy!

### Easy as Practicing with Dumbells

Here is the code as always!
-------

```js 
if (command === 'channel-info') {
let chnl = message.channel;

const chnlInfo = new Discord.RichEmbed()
.setTitle (`Channel Info`)
.addField ("Channel Name", chnl.name)
.addField ("Channel ID", chnl.id)
.addField ("Is channel nsfw?", chnl.nsfw ? 'This is a NSFW channel' : 'This is not a NSFW channel')
.addField ("Channel Topic", chnl.topic)
.setColor ("GREEN");

message.reply (chnlInfo);
}
```

> You can get topic containing emojis only if the bot is in the server from which the emoji belongs
