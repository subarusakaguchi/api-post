import { Post } from '../../../model/Posts';
import { IPostsRepository } from '../../../repositories/IPostsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
    post_id: string;
    title: string;
    content: string;
}

class EditPostUseCase {
    constructor(
        private postsRepository: IPostsRepository,
        private usersRepository: IUsersRepository,
    ) {}
    execute({ user_id, post_id, title, content }: IRequest): Post {
        const user = this.usersRepository.findById(user_id);
        const post = this.postsRepository.findPostById(post_id);

        if (!user || !post || user.id !== post.user_id) {
            throw new Error('Post or User not found');
        }

        const editedPost = this.postsRepository.editPost(post, title, content);

        return editedPost;
    }
}

export { EditPostUseCase };
