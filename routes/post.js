import express from 'express'

import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/:id', getPost
);

//delete post
router.delete('/:id', deletePost);

//update
router.put('/:id', updatePost);
//new post
router.post('/', createPost
)

export default router;