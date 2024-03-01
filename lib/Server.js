import express from 'express';
import helmet from 'helmet';
import ApiCheck from './middleware/ApiCheck.js';

export default function Server(opts) {
    const app = express();
    app.use(helmet());
    app.use(express.json());
    app.use(opts.apiCheck);

    return app;
}