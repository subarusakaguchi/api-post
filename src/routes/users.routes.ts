import Router from 'express';

import { createUserController } from '../modules/useCases/User/CreateUser';
import { deleteUserController } from '../modules/useCases/User/DeleteUser';
import { listUsersController } from '../modules/useCases/User/ListUsers';
import { turnAdminController } from '../modules/useCases/User/TurnAdmin';

const usersRouter = Router();

usersRouter.post('/', (req, res) => {
    return createUserController.handle(req, res);
});

usersRouter.patch('/:user_id/admin', (req, res) => {
    return turnAdminController.handle(req, res);
});

usersRouter.get('/', (req, res) => {
    return listUsersController.handle(req, res);
});

usersRouter.delete('/:user_id/delete', (req, res) => {
    return deleteUserController.handle(req, res);
});

export { usersRouter };
