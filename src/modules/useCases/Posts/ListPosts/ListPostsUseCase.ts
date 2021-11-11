import { Post } from '../../../model/Posts';
import { IPostsRepository } from '../../../repositories/IPostsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    qt: number;
    user_id: string;
}

class ListPostsUseCase {
    constructor(
        private postsRepository: IPostsRepository,
        private usersRepository: IUsersRepository,
    ) {}
    execute({ qt, user_id }: IRequest): Post[] {
        const user = this.usersRepository.findById(user_id);

        if (!user || !user.admin) {
            throw new Error('User not found or is not an Admin');
        }

        const posts = this.postsRepository.listPosts(qt);

        return posts;
    }
}

export { ListPostsUseCase };
