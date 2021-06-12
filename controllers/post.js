const postService = require('../services/post')

exports.getPost = async (req, res) => {
    const postId = req.params.id

    try {
        const result = await postService.getPost(postId)
        res.json(result);
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const result = await postService.getAllPosts()
        res.json(result);
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
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
        const result = await postService.addPost(newPost)

        res.json(result)
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
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

        res.json(result)
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
    }
}

exports.deletePost = async (req, res) => {
    const postId = req.params.id
    const userId = req.body.userId

    try {
        const result = await postService.deletePost(postId, userId)

        res.json(result)
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
    }
}

exports.deletePosts = async (req, res) => {
    const postsId = req.body.id
    const userId = req.body.userId

    try {
        const result = await postService.deletePosts(postsId, userId)
        res.json(result)
    } catch (err) {
        res.json({success: false, message:err.sqlMessage })
    }

}