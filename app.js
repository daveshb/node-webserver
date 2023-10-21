const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contendio estático

app.use(express.static('public'));

// app.get('/',  (req, res)=> {
//   res.send('Hello World');
// })

app.get('/',  (req, res)=> {
  res.render('home', {
    nombre: 'DAVID',
    titulo: 'Curso de Node'
  });
  })
app.get('/generic',  (req, res)=> {
  res.render('generic', {
    nombre: 'DAVID',
    titulo: 'Curso de Node'
  });
  })
app.get('/elements',  (req, res)=> {
  res.render('elements', {
    nombre: 'DAVID',
    titulo: 'Curso de Node'
  });
  })



app.get('/hola',  (req, res)=> {
  res.send('Hello World desde la ruta hola')
})


app.get('/generic',  (req, res)=> {
    res.sendFile( __dirname +'/public/generic.html');
})
app.get('/elements',  (req, res)=> {
    res.sendFile( __dirname +'/public/elements.html');
})
app.get('/generic',  (req, res)=> {
    res.sendFile( __dirname +'/public/generic.html');
})


app.get('*',  (req, res)=> {
  res.sendFile( __dirname +'/public/404.html');
})

app.listen(port,  ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
    })