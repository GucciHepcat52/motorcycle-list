require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

let globalId = 3;

module.exports = {
  addMotorcycle: (req, res) => {
    const { name, year, color } = req.body;

    sequelize
      .query(`
      INSERT INTO motorcycles
      (name, year, color)
      VALUES
      ('${name}', ${year}, '${color}');
      
      SELECT * FROM motorcycles;`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        globalId++;
      })
      .catch((error) => console.log(error));
  },
};
