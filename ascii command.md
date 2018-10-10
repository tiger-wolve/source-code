Ascii command
====
For this command you need the `figlet` module
----

First of all make sure you have installed the `figlet` module if not run `npm i figlet --save` in console or if you are using **glitch.com** go to package.json and click on add package then search for `figlet` and click on it

- If the upper thing is done use this code!
----

```js 
if (command === 'ascii') {
  const figlet = require('figlet'); // npm i figlet

// Ascii is cool Right?
  if (!args.join(' ')) return message.channel.send('Please provide some text!');
  figlet(args.join(' '), (err, data) => {
    message.channel.send(data, { // send the output to the channel
      code: 'ascii'
    });
  });
}
```
