Adding a **hook** command
========
This command sends our message in a webhook which display our bame and profile
--------

First if all make sure you have installed `quick.hook` if not run `npm install quick.hook` in console or if you are using **glitch.com** go to package.json and click on add package then search for quick.hook and click on it

- Also make sure you have typed `const send = require(quick.hook);` on the top of the bot files

```js 
if (command === 'hook') {
let heck = args.join (' ');
if (!heck) return message.reply ("Please supply some text to run this command");

let msgch = message.channel;
send (msgch, heck, {
name: `${message.user.username}`
icon: message.author.displayAvatarURL
});
}
```

And you are done!
