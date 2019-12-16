import config from './config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/users'));

app.listen(config.port, (err, res) => {
    if (err) {
        return console.log(`Error starting API : ${err}`)
    }
    console.log(`API running on http://localhost:${config.port}`)
})