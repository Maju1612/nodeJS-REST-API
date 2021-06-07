const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();


//show all records
router.get('/show', postController.getPosts);
//show record
router.get('/show/:id', postController.getPosts);
//add record
router.post('/add', postController.getPosts);
//edit record
router.put('/edit/:id', postController.getPosts);
//delete record
router.delete('/delete/:id', postController.getPosts);
//delete records in batch

module.exports = router;