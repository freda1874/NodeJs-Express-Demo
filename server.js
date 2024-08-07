import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import posts from './routes/post.js'
import logger from './middleware/logger.js';
import errorHadndler from './middleware/error.js'
//static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000



//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/posts', posts);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})

app.use(errorHadndler);


app.listen(port, () => console.log(`Server is listening on   ${port}`))

