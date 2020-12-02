const mongoose = require('mongoose')
const questionschema = mongoose.Schema({
  question: String,
  quizId: String
}, [String])
module.exports = questionschema