const express = require('express');
const router = express.Router();
const path = require('path');

// this is our get method.
// An api endpoint that returns a short list of items
router.get('/getList', (req,res) => {
   const list = ["item1", "item2", "item3"];
   res.json(list);
   console.log('Sent list of items');
});


// Handles any requests that don't match the ones above
router.get('*', (req,res) =>{
   res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;