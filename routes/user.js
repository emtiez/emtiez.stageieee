const express = require('express');
const router = express.Router();
const{user , list}=require('../Controller/UserController')
router.post('/user',user )
router.get('/user',list)
module.exports = router;