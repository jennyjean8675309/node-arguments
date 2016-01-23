# Node Arguments

## Overview

This lesson will cover the Node command-line arguments and how to access them.

## Objectives

1. Describe how the CLI argument input to Node script works
1. Describe an argument array
2. Describe first arguments

## CLI Arguments

How do we pass data to Node? `node` is just a command-line program and we can pass arguments to it. For example, we can pass two numbers to a program (file `sum.js`) that calculates the sum of them:

```
$ node sum.js 10 47
```

The result will be 57. We can pass numbers or strings. This approach is useful when you're running scripts which require small enough input that you can fit in in the command line, or whin building command-line tools with Node. Another use caes is when you have a complex program that needs to be launched in different modes, e.g., development mode with more verbose logging.

## Accessing Arguments

You've learned how to pass arguments, but how can you access them when you write your own program instead of using existing programs like sum.js? It's straightforward. All you need is to access `process.argv`. It's an array so all the Array methods available. 

Consider the sum.js program. I'm using `shift` to get rid of the first two elements and then `forEach()` to iterate through indefinite number of arguments. I convert each argument to a number and add them up to the `sum` variable:

```js
var sum = 0
process.argv.shift()
process.argv.shift()
process.argv.forEach(function summarize(item, index, list) {
  sum += parseInt(item, 10)
})
console.log(sum)
```

## First Arguments

The first arguments of the array were `node` and `sum` or the command and the script name. This is exactly what we had in the command line when we were running the program:

```
$ node sum 10 47
```

Note: The `.js` extension is optional. Node will try to match the filename to what's in the folder. If there's a `sum.js` file, it will run it.

The exact `process.argv` array will look like (on my machine):

```
[ '/usr/local/bin/node',
  '/Users/azat/Documents/Code/learn-co/node-arguments/sum',
  '10',
  '47' ]
```


Just for fun, take a look at this command in which we use `-e` to execute code right away without saving it to a file:

```
$ node -e "console.log(process.argv)" 10 47
```

Can you guess what will it output? That's right. The numbers will start from the second argument, not third as in the `sum.js` example:

```
[ '/usr/local/bin/node', '10', '47' ]
```

When working with `process.argv`, be mindful of the first arguments. They might not be the data you expect. 


## Resources

1. [process.argv official documentation](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
1. [Unix and Node: Command-line Arguments](http://dailyjs.com/2012/03/01/unix-node-arguments)
2. [Using Command Line Arguments in a Node Script](http://justindavis.co/2014/11/24/using-command-line-arguments-in-a-node-script)
3. [Commander.js: Solution for command-line interfaces](https://github.com/tj/commander.js)
1. [Yargs: CLI Arguments Parser](http://yargs.js.org)


---

<a href='https://learn.co/lessons/node-arguments' data-visibility='hidden'>View this lesson on Learn.co</a>
