const express = require ('express');
const { AnimationFrameScheduler } = require('rxjs/internal/scheduler/AnimationFrameScheduler');
const app = express();
const bodyParser = require ('body-parser');

const mongoose = require('mongoose');

//user: user
//senha: 19041505

const Livro = require('./models/livro');
const { ok } = require('assert');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://User:19041505@cluster0.5rh7y.mongodb.net/app-mean?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Conexão Ok");
})
.catch((error) => {
  console.log("Conexão Falhou");
  console.log(error);
})

// mongodb+srv://User:19041505@cluster0.5rh7y.mongodb.net/app-mean?retryWrites=true&w=majority


app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type',
  'Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
});

//http://localhost:3000/api/livros
app.get('/api/livros', (req, res, next)=>{
  Livro.find().then(
    docuemnts => {
      res.status(200).json({
        mensagen: "tudo OK",
        livros: docuemnts
      });
    }
  );
});

app.post('/api/livros', (req, res, next)=>{
  const livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });

  livro.save();

  console.log(livro);
  res.status(201).json({mensagen: "Livro inserido"})
})

module.exports = app
