const classSchema = new mongoose.Schema({
  title: String,
  grandma: String,
  date: Date,
  price: Number,
  link: String // Zoom/Meet link
});
module.exports = mongoose.model('Class', classSchema);