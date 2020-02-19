console.log(process.argv)
// process.argv is an array of arguments passed to the file

// running node sum.js 10 47 prints out...
// [
//   '/Users/jingram/.nvm/versions/node/v12.2.0/bin/node',
//   '/Users/jingram/Development/Node/node-arguments/sum.js',
//   '10',
//   '47'
// ]

// you can pass arguments to this script by running 'node sum.js 10 47' in the Command Line
var sum = 0
process.argv.shift()
// we get rid of the first argument - node
process.argv.shift()
// we get rid of the second argument - sum.js (the specific script we're running)

process.argv.forEach(function summarize(item, index, list) {
  // then we take each of the remaining arguments and add them together
  sum += parseInt(item, 10)
})
console.log(sum)
