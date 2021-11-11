import { Request, Response } from 'express';

import { EditPostUseCase } from './EditPostUseCase';

class EditPostController {
    constructor(private editPostUseCase: EditPostUseCase) {}
    handle(req: Request, res: Response): Response {
        const { title, content } = req.body;
        const { user_id, post_id } = req.params;

        try {
            const editedPost = this.editPostUseCase.execute({
                title,
                content,
                user_id,
                post_id,
            });

            return res.status(200).json(editedPost);
        } catch (error) {
            return res.status(404).json({ error: 'Post or User not found' });
        }
    }
}

export { EditPostController };
