const express = require('express');
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
  updateUsers,
} = require('../controller/UsersController');
const { verifyToken } = require('../middleware/verifyToken');
router.get('/', verifyToken, getAllUsers);

router.post('/register', register);

router.post('/login', login);

router.put('/update', updateUsers);

module.exports = router;
