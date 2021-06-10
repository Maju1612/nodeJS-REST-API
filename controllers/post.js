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
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;
    
    const newPost = {
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
    const id = req.params.id
    const title = req.body.title;
    const lead = req.body.lead;
    const content = req.body.content;

    const editedPost = {
        title,
        lead,
        content
    }

    try {
        await postService.editPost(id, editedPost)

        console.log(`Update post with id ${id}`)
        res.send(`Update post with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePost = async (req, res) => {
    const id = req.params.id

    try {
        await postService.deletePost(id)

        console.log(`Delete post with id ${id}`)
        res.send(`Delete post with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deletePosts = async (req, res) => {
    const id = req.body.id

    try {
        await postService.deletePosts(id)

        console.log(`Delete posts with id ${id.join(', ')}`)
        res.send(`Delete posts with id ${id.join(', ')}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }

}