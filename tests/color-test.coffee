Color = require('./color.js')
assert = require('chai').assert

colorA = '#000000'
colorB = '#ffffff'
steps = 10
colorTest = ["#000000","#1c1c1c","#383838","#545454","#707070","#8c8c8c","#a8a8a8","#c4c4c4","#e0e0e0","#ffffff"]

console.log 'test run'

console.log Color

colors = Color.gradient colorA, colorB, steps

assert.isArray(colors, 'colors is Array?')
assert.lengthOf(colors, 10)

for i in [0..9]
  assert.equal colors[i], colorTest[i], 'color is equal?'

console.log 'test end'