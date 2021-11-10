import express from 'express';

import { usersRouter } from './routes/users.routes';

const app = express();
const PORT = 8888;

app.use(express.json());

app.use(usersRouter);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
