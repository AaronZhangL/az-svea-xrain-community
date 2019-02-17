import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import mongoose from 'mongoose'
import Character from './character'

const app = express()
const port = process.env.PORT || 3001
//const dbUrl = process.env.MONGODB_URI
const dbUrl = 'mongodb://localhost/crud'
// call rest api


app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, { useMongoClient: true }, dbErr => {
//mongoose.connect(dbUrl, dbErr => {
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')

  app.post('/api/characters', (request, response) => {
    const { name, age, hltype, hlcontent, mltype, mlcontent, hlsummary } = request.body

    var character = new Character({
      name,
      age,
      hltype,
      hlcontent,
      mltype,
      mlcontent,
      hlsummary,
    });
    character.save(function(err,record) {
      console.log("record ID is: " + record.id);
      const request = require('request');
      request('http://localhost:9000/keywordsList?content='+ record.id, { json: true }, (err1, res, body) => {
        if (err1) { return console.log(err1); }
        console.log("Back value from python API server: " + body);
      });

      if (err) response.status(500)
      else {
        Character.find({}, (findErr, characterArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(characterArray)
        })
      }
    }
  )
  })

  app.get('/api/characters', (request, response) => {
    Character.find({}, (err, characterArray) => {
      if (err) response.status(500).send()
      else response.status(200).send(characterArray)
    })
  })

  app.put('/api/characters', (request, response) => {
    const { id } = request.body
    Character.findByIdAndUpdate(id, { $inc: {"age": 1} }, err => {
      if (err) response.status(500).send()
      else {
        Character.find({}, (findErr, characterArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(characterArray)
        })
      }
    })
  })

  app.delete('/api/characters', (request, response) => {
    const { id } = request.body
    Character.findByIdAndRemove(id, err => {
      if (err) response.status(500).send()
      else {
        Character.find({}, (findErr, characterArray) => {
          if (findErr) response.status(500).send()
          else response.status(200).send(characterArray)
        })
      }
    })
  })

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})
