import { User } from '../../../model/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository) {}
    execute({ name, email }: IRequest): User {
        const userAlreadyExists = this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = this.userRepository.create({ name, email });

        return user;
    }
}

export { CreateUserUseCase };
