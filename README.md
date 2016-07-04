# Node Arguments

## Overview

Programs are more functional when we can change the input. If there's no way to change the input,  it has to be hard-coded in the source code and this is a very bad practice. Imagine a function that calculates the sum of numbers. The numbers are hard-coded in the source code. You're doing your taxes, and each time you need to do a new calculation (that mad cash you make after finishing this course and getting a job as the Node engineer!), you go to your file, change the values, hit save and re-run the program. No bueno. What if you make a mistake in the code and delete some symbol when you're editing the number? And saving the file each time you need to calculate a sum slows you down.

Your program needs to have an input which is independent of the source code (the program itself). The easiest way to implement such input is to use command-line arguments. This lesson will cover the Node command-line arguments and how to access them.

## Objectives

1. Describe how the CLI argument input to Node script works
2. Describe an argument array
3. Describe first arguments

## CLI Arguments

How do we pass data to Node? `node` is just a command-line program and we can pass arguments to it. For example, we can pass two numbers to a program (file `sum.js`) that calculates the sum of them:

```
node sum.js 10 47
```

The result of `10 + 47` is 57. We can pass numbers or strings as arguments. This approach is useful when you're running scripts which require small enough input that you can fit in in the command line, or when building command-line tools with Node. Another use case is when you have a complex program that needs to be launched in different modes, e.g., development mode with more verbose logging versus production mode.

## Accessing Arguments

You've learned how to pass arguments, but how can you access them when you write your own program instead of using existing programs like `sum.js`? It's straightforward. All you need is to access `process.argv`, which is an array of the arguments passed to the file. All JavaScript array methods are available. 

Consider the sum.js program. First we use `shift` to get rid of the first two elements and then `forEach()` to iterate through indefinite number of arguments. Then we convert each argument to a number and add them up to the `sum` variable:

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
node sum 10 47
```

Note: The `.js` extension is optional. Node will try to match the filename to what's in the folder. If there's a `sum.js` file, it will run it.

The `process.argv` array will look something like this:

```
[ '/usr/local/bin/node',
  '/Users/azat/Documents/Code/learn-co/node-arguments/sum',
  '10',
  '47' ]
```

It will have four items. The first two might be different on your machine, but the `10` and `47` will be the same.

Just for fun, take a look at this command in which we use `-e` to execute code right away without saving it to a file (without saving means there's no file, none, zip, nada!):

```
node -e "console.log(process.argv)" 10 47
```

Note: If you need a refresher on the `-e` option, go back to [node-run-node](https://github.com/learn-co-curriculum/node-run-node).

Can you guess what will it output? That's right. The numbers will start from the second argument, not third as in the `sum.js` example:

```
[ '/usr/local/bin/node', '10', '47' ]
```

The difference is self evident when you look at the command. The first command had two arguments (`node` and the name of the file) and the second command (`-e`) only one which was `node`.

When working with `process.argv`, it's important to be mindful of the first arguments. They might not be the data you expect. 


## Resources

1. [process.argv official documentation](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
1. [Unix and Node: Command-line Arguments](http://dailyjs.com/2012/03/01/unix-node-arguments)
2. [Using Command Line Arguments in a Node Script](http://justindavis.co/2014/11/24/using-command-line-arguments-in-a-node-script)
3. [Commander.js: Solution for command-line interfaces](https://github.com/tj/commander.js)
1. [Yargs: CLI Arguments Parser](http://yargs.js.org)


---

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/node-arguments' title='node-arguments'>node-arguments</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/node-arguments'>Node Arguments</a> on Learn.co and start learning to code for free.</p>
