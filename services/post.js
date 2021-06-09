const { knex } = require('../db/conn')
const uuid = require('uuid');
const moment = require('moment')

const postRes = require('../repositories/post')

exports.getPost = async postId => {
    return await postRes.getPost(postId)
}

exports.getAllPosts = async () => {
    return await postRes.getAllPosts()
}

exports.addPost = async newPost => {
    const mysqlTimestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    newPost.createdAt = mysqlTimestamp
    newPost.updatedAt = mysqlTimestamp
    return await postRes.addPost(newPost)
}

exports.editPost = async (id, editedPost) => {
    editedPost.updatedAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    return await postRes.editPost(id, editedPost)
}

exports.deletePost = async id => {
   return await postRes.deletePost(id)
}

exports.deletePosts = async id => {
    return await postRes.deletePosts(id)
}