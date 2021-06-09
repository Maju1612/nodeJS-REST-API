const { knex } = require('../db/conn')
const uuid = require('uuid');
const moment = require('moment')

exports.getPost = async (req, res) => {
    const postId = req.params.id
    try {
        const result = await knex('Posts')
        .where('id', postId)
        res.json({
            Post: result
        });
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const result = await knex('Posts')
        res.json({
            Posts: result
        });
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.addPost = async (req, res) => {
    const id = uuid.v4();
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;
    const mysqlTimestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    
    try {
        await knex('Posts')
            .insert({
                id,
                title,
                lead,
                content,
                createdAt: mysqlTimestamp,
                updatedAt: mysqlTimestamp
            });
        console.log(`Add post with id ${id}`)
        res.send(`Add post with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.editPost = async (req, res) => {
    const id = req.params.id
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;
    const updatedAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    try {
        await knex('Posts')
            .where({id})
            .update({
                title,
                lead,
                content,
                updatedAt
            });
        console.log(`Update post with id ${id}`)
        res.send(`Update post with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePost = async (req, res) => {
    let id = req.params.id

    try {
        await knex('Posts')
            .where({id})
            .del()
        console.log(`Delete post with id ${id}`)
        res.send(`Delete post with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePosts = async (req, res) => {
    let id = req.body.id

    try {
        await knex('Posts')
            .whereIn('id', id)
            .del()
        console.log(`Delete posts with id ${id.join(', ')}`)
        res.send(`Delete posts with id ${id.join(', ')}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }

}