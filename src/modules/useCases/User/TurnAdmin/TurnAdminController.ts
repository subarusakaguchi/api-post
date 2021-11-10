import { Request, Response } from 'express';

import { TurnAdminUseCase } from './TurnAdminUseCase';

class TurnAdminController {
    constructor(private turnAdminUseCase: TurnAdminUseCase) {}
    handle(req: Request, res: Response): Response {
        const { user_id } = req.params;

        try {
            const user = this.turnAdminUseCase.execute({ user_id });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ error: 'User not found' });
        }
    }
}

export { TurnAdminController };
