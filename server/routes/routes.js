const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

//SELECT FROM change to name of table
router.get('/', (req, res) => {
  const sqlText = ` SELECT * FROM shopping ORDER BY "purchase_status", "name";`;
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

router.delete('/clear/:id', (req, res) => {
  const sqlText = 'DELETE FROM shopping'
     pool.query(sqlText)
    .then((result) => {
        console.log(result.rows)
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.put('/reset/:id', (req, res) => {
  const sqlText = 'UPDATE shopping SET purchase_status = FALSE'
  pool.query (sqlText)
  .then((result) => {
    console.log(result.rows)
    res.sendStatus(200)
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})








router.put('/buy/:id', (req, res) => {
    const idToUpdate =req.params.id
    const sqlText = 'UPDATE shopping SET purchase_status = TRUE WHERE id = $1'
    pool.query(sqlText, [idToUpdate])
    .then((result) =>{
        console.log(result.rowCount, 'item status changed!')
        res.sendStatus(200)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
