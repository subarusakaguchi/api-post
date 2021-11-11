import Router from 'express';

import { createPostController } from '../modules/useCases/Posts/CreatePost';
import { deletePostController } from '../modules/useCases/Posts/DeletePost';
import { editPostController } from '../modules/useCases/Posts/EditPost';
import { listPostsController } from '../modules/useCases/Posts/ListPosts';

const postsRouter = Router();

postsRouter.post('/:user_id', (req, res) => {
    return createPostController.handle(req, res);
});

postsRouter.put('/:user_id/:post_id', (req, res) => {
    return editPostController.handle(req, res);
});

postsRouter.delete('/:user_id/:post_id', (req, res) => {
    return deletePostController.handle(req, res);
});

postsRouter.get('/:user_id/:qt', (req, res) => {
    return listPostsController.handle(req, res);
});

export { postsRouter };
