
const { Sequelize, DataTypes } = require('sequelize');
 const router = require("express").Router();
 const validInfo = require("../middleWare/validInfo");
 const authorization = require("../middleWare/authorization");
 const bcrypt = require("bcrypt");
 const jwtGenerator = require("../utils/jwtGenerator");

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('jwtdb', 'postgres', 'Balu@123', {
    host: 'localhost',
    dialect: 'postgres'
});

// Define the User model
const User = sequelize.define('Users', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Registering route
router.post("/register", validInfo, async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { user_email: email } });
        if (user) {
            return res.status(401).send("User already exists.");
        }

        // hash the user password

        const saltRound = 10;
        const salt = await bcrypt.gensalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password,salt);

        // Create a new user
        const newUser = await User.create({
            user_name: name,
            user_email: email,
            user_password: bcryptPassword
        });

        // Generate JWT token
        const token = jwtGenerator(newUser.id);
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Login route
router.post("/login", validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ where: { user_email: email } });
        if (!user) {
            return res.status(401).send("Invalid credentials.");
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.user_password);
        if (!validPassword) {
            return res.status(401).send("Invalid credentials.");
        }

        // Generate JWT token
        const token = jwtGenerator(user.id);
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Verification route
router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;

