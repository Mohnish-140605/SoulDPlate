const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

// LibreTranslate - Free translation API
router.post('/translate', async (req, res) => {
  const { text, target } = req.body;
  try {
    const response = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target,
      format: 'text'
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Translation failed' });
  }
});

// Paraphrase
router.post('/paraphrase', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/Vamsi/T5_Paraphrase_Paws',
      { inputs: text },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Paraphrasing failed' });
  }
});

// Recommendation
router.post('/recommend', async (req, res) => {
  const { input } = req.body;
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-mnli',
      { inputs: input },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Recommendation failed' });
  }
});

module.exports = router;