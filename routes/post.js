const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();


//show all records
router.get('/show', postController.getAllPosts);
//show record
router.get('/show/:id', postController.getPost);
//add record
router.post('/add', postController.addPost);
//edit record
router.put('/edit/:id', postController.editPost);
//delete record or delete records in batch
router.delete('/delete/:id', postController.deletePost);


module.exports = router;