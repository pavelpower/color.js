Color = require('./color.js').Color
assert = require('chai').assert

colorA = '#000000'
colorB = '#ffffff'
steps = 10
colorTest = ["#000000","#1c1c1c","#383838","#545454","#707070","#8c8c8c","#a8a8a8","#c4c4c4","#e0e0e0","#ffffff"]

console.log 'Test run ', new Date()

assert.isFunction Color, 'Color is function!'

assert.ok Color, 'Color is exist!'

assert.property Color, 'create'

assert.property Color, 'gradient'

assert.property Color, 'toString'

# create gradient
colors = Color.gradient colorA, colorB, steps

assert.isArray colors

console.log colors[0].toString.toString()

arrayEqual = (a, b) ->
  a.length is b.length and a.every (elem, i) -> console.log elem.toString(), b[i], elem is b[i]

arrayEqual colors, colorTest

console.log 'test end'