import { UsersRepository } from '../../../repositories/implementations/UsersRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeteleteUserUseCase';

const usersRepository = UsersRepository.getInstance();

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
