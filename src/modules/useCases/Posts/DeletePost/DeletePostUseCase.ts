import { IPostsRepository } from '../../../repositories/IPostsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    post_id: string;
    user_id: string;
}

class DeletePostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
        private usersRepository: IUsersRepository,
    ) {}
    execute({ post_id, user_id }: IRequest): void {
        const user = this.usersRepository.findById(user_id);
        const post = this.postsRepository.findPostById(post_id);

        if (
            !user ||
            !post ||
            user.id !== post.user_id ||
            (!user.admin && user.id !== post.user_id)
        ) {
            throw new Error('User or Post not found');
        }

        this.postsRepository.deletePost(post);
    }
}

export { DeletePostUseCase };
