import { User } from '../model/User';

interface ICreateUserDTO {
    name: string;
    email: string;
}

interface IUsersRepository {
    create({ name, email }: ICreateUserDTO): User;
    findByEmail(email: string): User;
    findById(user_id: string): User;
    turnAdmin(received_user: User): User;
    deleteUserById(user_id: string): void;
    list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
