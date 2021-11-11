interface IPostsDTO {
    title: string;
    content: string;
    user_id: string;
}

interface IPostsRepository {
    create({ title, content, user_id }: IPostsDTO);
}

export { IPostsRepository, IPostsDTO };
