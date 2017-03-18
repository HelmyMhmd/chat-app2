const path = require('path');
const express = require('express');
const p = path.join(__dirname, '../public')
const ex = express();

//ex.use(express.static(p))

 ex.get('/public/index.html', function (req,res) {
    res.send('Helloooo');
 });



ex.listen(3000, () => {console.log('yousry tizo tez 7omara mbtd7ksh :)')} );
