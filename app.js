const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db/dictionary.json');
const db = low(adapter);

const app = express();

app.get('/:en',(req,res) => {
    const en = req.params.en;
    const ret = db.get('words')
        .find({word:{en}})
        .value();
    //console.log(ret);*/
    res.json(ret);
    
})

const port = 3000;
app.listen(port,() =>{
    console.log(`API running on port ${port}`);
});

