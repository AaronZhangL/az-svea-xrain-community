import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hltype: String,
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character
