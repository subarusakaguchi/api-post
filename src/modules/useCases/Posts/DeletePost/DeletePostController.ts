import { Request, Response } from 'express';

import { DeletePostUseCase } from './DeletePostUseCase';

class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) {}
    handle(req: Request, res: Response): Response {
        const { user_id, post_id } = req.params;

        try {
            this.deletePostUseCase.execute({ user_id, post_id });

            return res
                .status(200)
                .json({ success: 'Post successfully deleted' });
        } catch (error) {
            return res.status(404).json({ error: 'User or post not found' });
        }
    }
}

export { DeletePostController };
