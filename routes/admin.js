/**
 * Created by jia on 2016/11/29.
 */

var express = require('express');
var router = express.Router();

router.get('/input', function(req, res, next){
    console.log('input')
})

module.exports = router;
