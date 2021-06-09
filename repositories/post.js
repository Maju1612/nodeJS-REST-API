const { knex } = require('../db/conn')
const uuid = require('uuid');
const moment = require('moment')

exports.getPost = async postId => {
    return await knex('Posts')
        .where('id', postId)
}

exports.getAllPosts = async () => {
    return await knex('Posts')
}

exports.addPost = async newPost => {
    return await knex('Posts')
        .insert(newPost);
}

exports.editPost = async (id, editedPost) => {
    return await knex('Posts')
        .where({id})
        .update(editedPost);  
}

exports.deletePost = async id => {
    return await knex('Posts')
        .where({id})
        .del()
}

exports.deletePosts = async id => {
    return await knex('Posts')
        .whereIn('id', id)
        .del()
}