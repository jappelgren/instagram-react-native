const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newPost = req.body.newPost;
    console.log(newPost)

    const sqlQuery = `INSERT INTO "posts" ("image", "description")
                      VALUES ($1, $2);`

    pool.query(sqlQuery, [newPost.url, newPost.description])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error adding post to db', error);
        res.sendStatus(500);
    })
})

module.exports = router;