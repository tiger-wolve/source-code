Let's add a avatar command
===========

This command fetches a user's avatar if we mention someone in the command or it returns our avatar
------

First make sure you use `Discord.RichEmbed ()` because their quality is the best!

Here's the code!
-------

```js 
if (command === 'avatar') {
let user = message.mentions.users.first () || message.author
const embed = new Discord.RichEmbed ()

.setAuthor (`${user.tag}`, user.displayAvatarURL
.setTitle ('Avatar')
.setImage (user.displayAvatarURL)

message.channel.send (embed)
}
```
