import { Post } from '../../model/Posts';
import { IPostsDTO, IPostsRepository } from '../IPostsRepository';

class PostsRepository implements IPostsRepository {
    private posts: Post[];

    private static INSTANCE: PostsRepository;

    constructor() {
        this.posts = [];
    }

    public static getInstance() {
        if (!PostsRepository.INSTANCE) {
            PostsRepository.INSTANCE = new PostsRepository();
        }

        return PostsRepository.INSTANCE;
    }

    create({ title, content, user_id }: IPostsDTO): Post {
        const newPost = new Post();

        Object.assign(newPost, {
            title,
            content,
            user_id,
            created_at: new Date(),
            last_update: new Date(),
        });

        this.posts.push(newPost);

        return newPost;
    }
}

export { PostsRepository };
