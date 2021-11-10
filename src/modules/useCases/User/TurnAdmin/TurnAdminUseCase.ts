import { User } from '../../../model/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

class TurnAdminUseCase {
    constructor(private userRepository: IUsersRepository) {}
    execute({ user_id }: IRequest): User {
        const userExists = this.userRepository.findById(user_id);

        if (!userExists) {
            throw new Error('User not found');
        }

        const userAdmin = this.userRepository.turnAdmin(userExists);

        return userAdmin;
    }
}

export { TurnAdminUseCase };
