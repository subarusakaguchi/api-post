import { PostsRepository } from '../../../repositories/implementations/PostsRepository';
import { UsersRepository } from '../../../repositories/implementations/UsersRepository';
import { CreatePostController } from './CreatePostController';
import { CreatePostUseCase } from './CreatePostUseCase';

const usersRepository = UsersRepository.getInstance();

const postsRepository = PostsRepository.getInstance();

const createPostUseCase = new CreatePostUseCase(
    postsRepository,
    usersRepository,
);

const createPostController = new CreatePostController(createPostUseCase);

export { createPostController };
