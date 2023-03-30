import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
})