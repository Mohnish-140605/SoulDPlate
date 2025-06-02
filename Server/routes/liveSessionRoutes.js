const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json([
    {
      _id: '1',
      title: 'Cooking with Grandma Asha',
      date: new Date(),
      link: 'https://meet.google.com/'
    }
  ]);
});

module.exports = router;