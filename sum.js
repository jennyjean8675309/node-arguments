// console.log(process.argv)
var sum = 0
process.argv.shift()
process.argv.shift()
process.argv.forEach(function summarize(item, index, list) {
  sum += parseInt(item, 10)
})
console.log(sum)
