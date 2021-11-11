import { Request, Response } from 'express';

import { ListPostsUseCase } from './ListPostsUseCase';

class ListPostsController {
    constructor(private listPostsUseCase: ListPostsUseCase) {}
    handle(req: Request, res: Response): Response {
        const { qt: qtString, user_id } = req.params;
        try {
            const qt = Number(qtString);
            const posts = this.listPostsUseCase.execute({ qt, user_id });
            return res.status(200).json(posts);
        } catch (error) {
            return res
                .status(404)
                .json({ error: 'User not found or is not an Admin' });
        }
    }
}

export { ListPostsController };
