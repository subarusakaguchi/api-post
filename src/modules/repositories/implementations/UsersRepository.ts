import { User } from '../../model/User';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
    private users: User[] = [];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): User {
        const newUser = new User();

        Object.assign(newUser, {
            name,
            email,
            created_at: new Date(),
            last_update: new Date(),
        });

        this.users.push(newUser);

        return newUser;
    }

    findByEmail(email: string): User {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    findById(user_id: string): User {
        const user = this.users.find(user => user.id === user_id);
        return user;
    }

    list(): User[] {
        return this.users;
    }

    turnAdmin(received_user: User): User {
        Object.assign(received_user, {
            admin: true,
            last_update: new Date(),
        });

        return received_user;
    }

    deleteUserById(user_id: string): void {
        this.users = this.users.filter(user => user.id !== user_id);
    }
}

export { UsersRepository };
