Creating a say command 
======
This command says your message and it does not need to install anything!
-----

> So here's the code simply paste it!

```
if (command === 'say') {
let mseg = args.join(" ");
if (!mseg) return message.reply ("Please supply some arguments so that i can say your message!");

//Args = to ["Args", "are", "really", "cool"]
message.channel.send (mseg)
}
```

And the bot said "Our message"
