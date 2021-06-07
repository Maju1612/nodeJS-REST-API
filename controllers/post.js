const { conn } = require('../db/conn')

exports.getPost = (req, res) => {
    const postId = req.params.id
    const sql = "SELECT * FROM Posts WHERE id = ?"
    conn.query(sql, postId, (err, rows, fields) => {
        if (err) {
            res.send("Falied to query for posts: " + err)
            throw err
        }
        console.log("Fetched posts succesfully")
        res.json(rows)
    })
}

exports.getAllPosts = (req, res) => {
    const sql = "SELECT * FROM Posts"
    conn.query(sql, (err, rows, fields) => {
        if (err) {
            res.send("Falied to query for posts: " + err)
            throw err
        }
        console.log("Fetched posts succesfully")
        res.json(rows)
    })
}

exports.addPost = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;

    const sql = "INSERT INTO Posts (id, title, lead, content) VALUES (?, ?, ?, ?)";

    conn.query(sql, [id, title, lead, content], (err, rows, fields) => {
        if (err) {
            res.send("Falied to query for posts: " + err)
            throw err
        }
        res.json(rows)
    })
}

exports.editPost = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;

    const sql = "UPDATE Posts SET title=?, lead=?, content=? WHERE id=?";

    conn.query(sql, [title, lead, content, id], (err, rows, fields) => {
        if (err) {
            res.send("Falied to query for posts: " + err)
            throw err
        }
        res.json(rows)
    })
}

    exports.deletePost = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;

    const sql = "DELETE FROM Posts WHERE id=?";

    conn.query(sql, id, (err, rows, fields) => {
        if (err) {
            res.send("Falied to query for posts: " + err)
            throw err
        }
        res.json(rows)
    })
}