const { knex } = require('../db/conn')

exports.getPost = async postId => {
    return await knex('Posts')
        .where('id', postId)
        .first()
}

exports.getAllPosts = async () => {
    return await knex('Posts')
}

exports.addPost = async newPost => {
    await knex('Posts')
        .insert(newPost);
    return {success: true }
}

exports.editPost = async (postId, userId, editedPost) => {
    const author = await knex('Posts')
        .where('id', postId)
        .first('author')
    
    if(userId !== author) return {success: false }

    await knex('Posts')
        .where('id', postId)
        .update(editedPost);
    return {success: true }
}

exports.deletePost = async (postId, userId) => {
    const author = await knex('Posts')
        .where('id', postId)
        .first('author')
    
    if(userId !== author) return {success: false }
    
    await knex('Posts')
        .where('id', postId)
        .del()
    return {success: true }
}

exports.deletePosts = async (postsId, userId) => {
    const posts = await knex('Posts')
        .whereIn('id', postsId)
    
    const checkedPosts = posts.filter(post => {
        if (userId === post.author)
            return post
        
    })

    if(checkedPosts.length !== posts.length) return {success: false }
    
    await knex('Posts')
        .whereIn('id', postsId)
        .del()
    return {success: true }
}