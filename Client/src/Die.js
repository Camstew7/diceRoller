var Die = function (sides) {
  this.type = sides > 2 ? 'D' + sides : 'coin'
  this.sides = Number(sides)
  this.rolledValue = false
}

Die.prototype.roll = function () {
  if(this.type === 'coin') {
    this.rolledValue = Math.random() > .5 ? 'heads' : 'tails'
  } else {
    this.rolledValue = Math.floor(Math.random() * ((this.sides + 1) - 1)) + 1
  }
  return this.rolledValue
}

module.exports.Die = Die