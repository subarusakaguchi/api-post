import { UsersRepository } from '../../../repositories/implementations/UsersRepository';

interface IRequest {
    user_id_to_be_deleted: string;
    user_id_to_be_verified: string;
}

class DeleteUserUseCase {
    constructor(private userRepository: UsersRepository) {}
    execute({ user_id_to_be_deleted, user_id_to_be_verified }: IRequest): void {
        const userExists = this.userRepository.findById(user_id_to_be_verified);

        if (!userExists || userExists.admin !== true) {
            throw new Error('User not found or is nor an Admin');
        }

        this.userRepository.deleteUserById(user_id_to_be_deleted);
    }
}

export { DeleteUserUseCase };
