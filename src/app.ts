import express from 'express';
import { SearchEngine } from './search/SearchEngine'

let app = express();

app.get('/search', function(req, res){
    var results = (new SearchEngine()).getResults();

    res.status(200).send(results);
});

export = app;