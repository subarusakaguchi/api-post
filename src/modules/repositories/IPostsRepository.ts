import { Post } from 'modules/model/Posts';

interface IPostsDTO {
    title: string;
    content: string;
    user_id: string;
}

interface IPostsRepository {
    create({ title, content, user_id }: IPostsDTO): Post;
    listPosts(qt: number): Post[];
    editPost(received_post: Post, title: string, content: string): Post;
    findPostById(post_id: string): Post;
    deletePost(received_post: Post): void;
}

export { IPostsRepository, IPostsDTO };
