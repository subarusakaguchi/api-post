import { v4 as uuidv4 } from 'uuid';

class Post {
    id?: string;
    user_id: string;
    title: string;
    content: string;
    image?: File;
    created_at: Date;
    last_update: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Post };
