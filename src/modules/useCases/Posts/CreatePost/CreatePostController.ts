import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase';

class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) {}
    handle(req: Request, res: Response): Response {
        const { title, content } = req.body;
        const { user_id } = req.params;

        try {
            const newPost = this.createPostUseCase.execute({
                title,
                content,
                user_id,
            });

            return res.status(201).json(newPost);
        } catch (error) {
            return res.status(404).json({ error: 'User not found' });
        }
    }
}

export { CreatePostController };
