const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
let groceryList = [];
let cacheName = '';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const thing = {
        firstName: cacheName,
        lastName: 'bong',
        dongSize: 10
    };
    res.json(thing);
});

app.post('/change-name', (req, res) => {
    cacheName = req.body.newName;
    res.send('name has been changed');
});
app.delete('/be-gone', (req, res) => {
    cacheName = '';
    res.send('it been goned');
});


//#region grocery actions
app.get('/show', (req, res) => {
    res.json(groceryList);
    
});

app.post('/add', (req, res) => {
    if (groceryList.includes(req?.body?.groceryItem)) {
        res.send(req.body.groceryItem.toString() + ' already in the list');
    }
    else if (req?.body?.groceryItem.length > 0) {
        groceryList.push(req.body.groceryItem);
        res.send(req.body.groceryItem.toString() + ' added to list');
    }
    else {
        res.send('can not add nothing');
    }

});

app.delete('/clear', (req, res) => {
    groceryList = [];
    res.send('no more grocery list');
});
//#endregion


app.listen(port, () => {
    console.log(`running on port: ${port}`);
});



//added comment// 
