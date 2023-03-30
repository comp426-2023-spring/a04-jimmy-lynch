#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Check endpoint @ /app
app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
})

// check endpoint at /app/rps
app.get('/app/rps/', (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
})

// /app/rpsls endpoint
app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
})

// /app/rps/play endpoint (bodies & params)
app.get('/app/rps/play/', (req, res) => { //rps URLEncoded
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

app.post('/app/rps/play/', (req, res) => { //rps JSON
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
})

app.get('/app/rps/play/:shot', (req, res) => { //rps shot params
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

// /app/rpsls/play endpoint
app.get('/app/rpsls/play/', (req, res) => { //rpsls URLEncoded
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

app.post('/app/rpsls/play/', (req, res) => { //rpsls JSON
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})

app.get('/app/rpsls/play/:shot', (req, res) => { //rpsls shot params
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})


// default endpoint)
app.get("/app/*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
