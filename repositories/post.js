const { knex } = require('../db/conn')

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

exports.editPost = async (postId, userId, editedPost) => {
    const post = await knex('Posts')
        .where('id', postId)
        .first()
    
    if(userId !== post.author) return false

    return await knex('Posts')
        .where('id', postId)
        .update(editedPost);  
}

exports.deletePost = async (postId, userId) => {
    const post = await knex('Posts')
        .where('id', postId)
        .first()
    
    if(userId !== post.author) return false
    
    return await knex('Posts')
        .where('id', postId)
        .del()
}

exports.deletePosts = async (postsId, userId) => {
    const posts = await knex('Posts')
        .whereIn('id', postsId)
    
    const checkedPosts = posts.filter(post => {
        if (userId === post.author)
            return post
        
    })

    if(checkedPosts.length !== posts.length) return false
    
    return await knex('Posts')
        .whereIn('id', postsId)
        .del()
}