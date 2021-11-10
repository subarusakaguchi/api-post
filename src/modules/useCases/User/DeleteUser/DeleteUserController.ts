import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeteleteUserUseCase';

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}
    handle(req: Request, res: Response): Response {
        const { user_id } = req.headers;
        const { user_id: user_id_to_be_deleted } = req.params;

        const user_id_to_be_verified = String(user_id);

        try {
            this.deleteUserUseCase.execute({
                user_id_to_be_verified,
                user_id_to_be_deleted,
            });

            return res.status(200).send();
        } catch (error) {
            return res
                .status(404)
                .json({ error: 'User not found or is nor an Admin' });
        }
    }
}

export { DeleteUserController };
