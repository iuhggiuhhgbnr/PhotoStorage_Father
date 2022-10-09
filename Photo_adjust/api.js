const client = require('./connection.js')
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// Static Files
app.use(express.static('public'));
// Specific folder example
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/img', express.static(__dirname + 'public/images'))

//Local port
app.listen(port, () => console.info(`App listening on port ${port}`))
client.connect();

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');


// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/input', (req, res) => {
    res.sendFile(__dirname + '/views/input.html')
})

app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/views/delete.html')
})


app.get('/users', (req, res)=>{
  client.query(`Select * from users`, (err, result)=>{
      if(!err){
          res.send(result.rows);
      }
  });
  client.end;
})

app.get('/users/:id', (req, res)=>{
  client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
      if(!err){
          res.send(result.rows);

      }
  });
  client.end;
})

app.post('/users', (req, res)=> {
  const user = req.body;
  let insertQuery = `insert into users(id, namecom, descom, descom2, descom3, descom4, descom5, timeadd, imagedata) 
                     values(${user.id}, '${user.namecom}', '${user.descom}', '${user.descom2}', '${user.descom3}', '${user.descom4}', '${user.descom5}', '${user.timeadd}', '${user.imagedata}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set nameCom = '${user.namecom}',
                       desCom = '${user.descom}',
                       timeAdd = '${user.timeadd}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//bytea('${user.imagedata}')