import { PostsRepository } from '../../../repositories/implementations/PostsRepository';
import { UsersRepository } from '../../../repositories/implementations/UsersRepository';
import { EditPostController } from './EditPostController';
import { EditPostUseCase } from './EditPostUseCase';

const postsReposistoy = PostsRepository.getInstance();

const usersRepository = UsersRepository.getInstance();

const editPostUseCase = new EditPostUseCase(postsReposistoy, usersRepository);

const editPostController = new EditPostController(editPostUseCase);

export { editPostController };
