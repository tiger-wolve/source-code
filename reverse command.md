Reverse command
====

This command reverses the given __text!__
----

So who does not want a reverse command?

- You do not need to install any module for this command everythingis there from start

Here is the code!
-----

```js
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
```

# Here is a **example**

Input 
-----
Hello How are you?

Output
-----
?uoy era woH olleH
