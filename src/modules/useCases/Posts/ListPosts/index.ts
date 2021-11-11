import { PostsRepository } from '../../../repositories/implementations/PostsRepository';
import { UsersRepository } from '../../../repositories/implementations/UsersRepository';
import { ListPostsController } from './ListPostsController';
import { ListPostsUseCase } from './ListPostsUseCase';

const postsRepository = PostsRepository.getInstance();

const usersRepository = UsersRepository.getInstance();

const listPostsUseCase = new ListPostsUseCase(postsRepository, usersRepository);

const listPostsController = new ListPostsController(listPostsUseCase);

export { listPostsController };
