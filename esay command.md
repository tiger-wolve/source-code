# Now lets add a esay command
### The meaning of esay is embed say in the word `esay`. `e` stands for embed

> Please make sure that you know that `args.join (" ")` copy paste the full sentence!

## Here is the code
-----

```js 
if (command === 'esay') {
let say = args.join (" ");
const embed = new Discord.RichEmbed()
// RichEmbeds have the best quality
.setAuthor (`${message.author.tag}` message.author.displayAvatarURL)
.setDescription(say)
.setColor ("GREEN");
// Green color suits the embed nicely!

message.channel.send (embed)
}
```

And the bot says our message in a green embed showing our tag avatar icon and our message!
