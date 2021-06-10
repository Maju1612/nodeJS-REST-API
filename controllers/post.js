const postService = require('../services/post')

exports.getPost = async (req, res) => {
    const postId = req.params.id

    try {
        const result = await postService.getPost(postId)
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
        const result = await postService.getAllPosts()
        res.json({
            Posts: result
        });
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.addPost = async (req, res) => {
    const author = req.body.userId
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;
    
    const newPost = {
        author,
        title,
        lead,
        content
    }

    try {
        await postService.addPost(newPost)

        console.log(`Add post`)
        res.send(`Add post`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.editPost = async (req, res) => {
    const userId = req.body.userId
    const postId = req.params.id
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;

    const editedPost = {
        title,
        lead,
        content
    }

    try {
        const result = await postService.editPost(postId, userId, editedPost)

        res.send(result ? `Update post with id ${postId}`:"You can't edit this post")
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePost = async (req, res) => {
    const postId = req.params.id
    const userId = req.body.userId

    try {
        const result = await postService.deletePost(postId, userId)

        res.send(result ? `Delete post with id ${postId}`:"You can't delete this post")
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePosts = async (req, res) => {
    const postsId = req.body.id
    const userId = req.body.userId

    try {
        const result = await postService.deletePosts(postsId, userId)
        res.send(result ? `Delete ${result} posts`:"You can't delete these posts")
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }

}