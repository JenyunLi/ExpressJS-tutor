const express = require('express');
const router = express.Router();

router.get('/user', UserController.getUser)
router.post('/login', UserController.login)


module.exports = router;