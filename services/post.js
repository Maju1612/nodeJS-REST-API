const uuid = require('uuid');
const moment = require('moment')

const postRes = require('../repositories/post')

exports.getPost = async postId => {
    return postRes.getPost(postId)
}

exports.getAllPosts = async () => {
    return postRes.getAllPosts()
}

exports.addPost = async newPost => {
    const mysqlTimestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    newPost.createdAt = mysqlTimestamp
    newPost.updatedAt = mysqlTimestamp
    newPost.id = uuid.v4();

    return postRes.addPost(newPost)
}

exports.editPost = async (postId, userId, editedPost) => {
    editedPost.updatedAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    return postRes.editPost(postId, userId, editedPost)
}

exports.deletePost = async (postId, userId) => {
   return postRes.deletePost(postId, userId)
}

exports.deletePosts = async (postId, userId) => {
    return postRes.deletePosts(postId, userId)
}