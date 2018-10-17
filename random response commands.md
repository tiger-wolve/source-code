#This command returns a random response whenever used
It is very easy to type and run

### Index 
-----
- [Example](#example)
- [Command code](#command-code)

### Example

So first of all make sure you use all arguments and end them with a `,`! For example:

```js
const array = [
"1st Reply",
"2nd Reply", 
"3rd Reply"
]
```

Here ^^^ We did not use `, (comma)` at the last line as it is the last Reply!

### Command code

```js
if (command === 'random-reply') {
var replies = [
"First reply",
"Second reply",
"Third reply",
"Fourth reply",
"Fifth replt"
]; // We can add as much as replies as we want

let reply = (Math.floor (Math.Random () * replies.length); // Here you can replace "replies" with the content you use after `var`

message.channel.send (reply)
}
```
