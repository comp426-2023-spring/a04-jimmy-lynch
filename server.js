import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

//(2) default endpoint)

//(3) Check endpoint @ /app
app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
})

//(4) check endpoint at /app/rps
app.get('/app/rps/', (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
})

//(5) /app/rpsls endpoint
app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
})

//(6) /app/rps/play endpoint
app.get('/app/rps/play/', (req, res) => {
    res.status(200).send(JSON.stringify(req.query.shot));
})

app.post('/app/rps/play/', (req, res) => {
    res.status(200).send(JSON.stringify(req.body.shot));
})

app.get('/app/rpsls/play/', (req, res) => {
    res.status(200).send(JSON.stringify(req.query.shot));
})

app.post('/app/rpsls/play/', (req, res) => {
    res.status(200).send(JSON.stringify(req.body.shot));
})

//(7) /app/rpsls/play endpoint

//(8) /app/rpsls/play/(rock...) endpoint