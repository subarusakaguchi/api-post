import { Request, Response } from 'express';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
    constructor(private listUserUseCase: ListUsersUseCase) {}
    handle(req: Request, res: Response): Response {
        const { user_id: user1_id } = req.headers;

        try {
            const user_id = String(user1_id);

            const allUsers = this.listUserUseCase.execute({ user_id });

            return res.status(200).json(allUsers);
        } catch (error) {
            return res
                .status(404)
                .json({ error: 'User not found or is not an Admin' });
        }
    }
}

export { ListUsersController };
