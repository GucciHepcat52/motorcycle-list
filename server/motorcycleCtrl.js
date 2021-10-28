const motorcycles = require('./motorcycles.json')
let globalId = motorcycles[motorcycles.length - 1].id + 1

module.exports = {
    addMotorcycle: (req, res) => {
        const {name, year, color} = req.body

        let newMotorcycle = {
            name,
            year,
            color,
            id: globalId
        }

        motorcycles.push(newMotorcycle)
        globalId++

        res.status(200).send(motorcycles)
    }
}