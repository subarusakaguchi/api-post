import { PostsRepository } from '../../../repositories/implementations/PostsRepository';
import { UsersRepository } from '../../../repositories/implementations/UsersRepository';
import { DeletePostController } from './DeletePostController';
import { DeletePostUseCase } from './DeletePostUseCase';

const postsRepository = PostsRepository.getInstance();

const usersRepository = UsersRepository.getInstance();

const deletePostUseCase = new DeletePostUseCase(
    postsRepository,
    usersRepository,
);

const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostController };
