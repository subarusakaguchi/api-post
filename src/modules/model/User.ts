import { v4 as uuidv4 } from 'uuid';

class User {
    id?: string;
    name: string;
    email: string;
    admin: boolean;
    created_at: Date;
    last_update: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
        if (!this.admin) {
            this.admin = false;
        }
    }
}

export { User };
