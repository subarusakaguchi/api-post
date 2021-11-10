import { User } from '../../../model/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

class ListUsersUseCase {
    constructor(private userRepository: IUsersRepository) {}
    execute({ user_id }: IRequest): User[] {
        const userExists = this.userRepository.findById(user_id);

        if (!userExists || userExists.admin !== true) {
            throw new Error('User not found or is not an Admin');
        }

        return this.userRepository.list();
    }
}

export { ListUsersUseCase };
