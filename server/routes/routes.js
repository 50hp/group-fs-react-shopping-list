const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

//SELECT FROM change to name of table
router.get('/', (req, res) => {
  const sqlText = ` SELECT * FROM shopping;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Items from the database", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query {sqlText}`, error);
      res.sendStatus(500); //response
    });
});

router.post('/', (req, res) => {
  const shopping = req.body;
  console.log(req.body)
  const sqlText = `INSERT INTO shopping ("name", "quantity", "unit") 
                    VALUES ($1, $2, $3)`;
  pool
    .query(
      sqlText,[
        shopping.name,
        shopping.quantity,
        shopping.unit
      ]
    )
    .then((result) => {
      console.log(`added shopping items to the database`, shopping);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error posting to the database${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id
    const sqlText = 'DELETE FROM shopping WHERE id = $1'
    pool.query(sqlText, [idToDelete])
    .then((result) => {
        console.log(result.rows)
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router;
