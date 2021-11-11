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

    findPostById(post_id: string): Post {
        return this.posts.find(post => post.id === post_id);
    }

    listPosts(qt: number): Post[] {
        const index = qt * -1;
        return this.posts.slice(index, this.posts.length);
    }

    editPost(received_post: Post, title: string, content: string): Post {
        Object.assign(received_post, {
            title,
            content,
            last_update: new Date(),
        });

        return received_post;
    }

    deletePost(received_post: Post): void {
        this.posts = this.posts.filter(post => post !== received_post);
    }
}

export { PostsRepository };
