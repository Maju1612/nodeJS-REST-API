const express = require('express');
const postController = require('../controllers/post');
const { authToken } = require('../services/jwt')

const router = express.Router();

//show all records
router.get('/show', postController.getAllPosts);
//show record
router.get('/show/:id', postController.getPost);
//add record
router.post('/add', authToken, postController.addPost);
//edit record
router.put('/edit/:id', authToken, postController.editPost);
//delete record
router.delete('/delete/:id', authToken, postController.deletePost);
//delete records in batch
router.delete('/delete', authToken, postController.deletePosts);

module.exports = router;