
class Drone {
  constructor (id, name) {
    this.id = id
    this.name = name
  }
}

let drone = new Drone('A123', 'Salo')
let drone2 = new Drone('B123', 'Can')

console.log(`drone: ${drone2.id} ${drone2.name}`)
