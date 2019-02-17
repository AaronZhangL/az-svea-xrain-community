import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hltype: String,
  hlcontent: String,
  mltype: String,
  mlcontent: String,
  hlsummary: String,
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character
