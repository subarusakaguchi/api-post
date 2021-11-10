import Router from 'express';

import { createUserController } from '../modules/useCases/User/CreateUser';
import { deleteUserController } from '../modules/useCases/User/DeleteUser';
import { listUsersController } from '../modules/useCases/User/ListUsers';
import { turnAdminController } from '../modules/useCases/User/TurnAdmin';

const usersRouter = Router();

usersRouter.post('/users', (req, res) => {
    return createUserController.handle(req, res);
});

usersRouter.patch('/users/:user_id/admin', (req, res) => {
    return turnAdminController.handle(req, res);
});

usersRouter.get('/users', (req, res) => {
    return listUsersController.handle(req, res);
});

usersRouter.delete('/users/:user_id/delete', (req, res) => {
    return deleteUserController.handle(req, res);
});

export { usersRouter };
