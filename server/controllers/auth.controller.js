const jwt = require('jsonwebtoken');
const { users } = require('../database-Sequelize/index');
const { AddUser } = require('./users.controller');
const bcrypt = require('bcryptjs');
const generateToken = (userId, userName) => {
  const expiresIn = 60 * 60 * 24;
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: expiresIn });
};

const signUp = async (req, res) => {
  const { first_name, last_name, user_phOrEmail, user_password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = {
      first_name,
      last_name,
      user_phOrEmail,
      user_img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      user_password: hashedPassword
    };

    const result = await users.create(newUser);
    const tok = generateToken(result.dataValues.id, result.dataValues.first_name);
    result.dataValues.tok = tok;
    res.send(result.dataValues);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};

const signIn = async (req, res) => {
  const { user_phOrEmail, user_password } = req.body;
  try {
    const result = await users.findOne({ where: { user_phOrEmail: user_phOrEmail } });
    if (result === null) res.send("Email not found");
    else {
      const passwordMatch = await bcrypt.compare(user_password, result.dataValues.user_password);
      if (passwordMatch) {
        const tok = generateToken(result.dataValues.id, result.dataValues.first_name);
        result.dataValues.tok = tok;
        res.send(result.dataValues);
      } else {
        res.send("Password mismatch");
      }
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
