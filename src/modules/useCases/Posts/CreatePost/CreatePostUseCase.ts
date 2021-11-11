import { Post } from '../../../model/Posts';
import { IPostsRepository } from '../../../repositories/IPostsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    title: string;
    content: string;
    user_id: string;
}

class CreatePostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
        private userRepository: IUsersRepository,
    ) {}
    execute({ title, content, user_id }: IRequest): Post {
        const userExists = this.userRepository.findById(user_id);

        if (!userExists) {
            throw new Error('User not found');
        }

        const newPost = this.postsRepository.create({
            title,
            content,
            user_id,
        });

        return newPost;
    }
}

export { CreatePostUseCase };
