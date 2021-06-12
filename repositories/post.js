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
    const result = await knex('Posts')
        .where({'id': postId, 'author':userId})
        .first('author')
        .update(editedPost);
    return result > 0 ? {success: true } : {success: false }
}

exports.deletePost = async (postId, userId) => {
    const result = await knex('Posts')
        .where({'id': postId, 'author':userId})
        .del()
    return result > 0 ? {success: true } : {success: false }
}

exports.deletePosts = async (postsId, userId) => {
    const posts = await knex('Posts')
        .whereIn('id', postsId)
        .andWhere('author', userId)

    if(postsId.length !== posts.length) return {success: false }
    
    await knex('Posts')
        .whereIn('id', postsId)
        .del()
    return {success: true }
}