import Router from 'express';

import { createPostController } from '../modules/useCases/Posts/CreatePost';

const postsRouter = Router();

postsRouter.post('/:user_id', (req, res) => {
    return createPostController.handle(req, res);
});

export { postsRouter };
