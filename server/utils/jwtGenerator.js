// const jwt = require("jsonwebtoken");
// require('dotenv').config();

// function jwtGenerator(user_id){

//     const payload = {
//         user:user_id
//     }

//    return  jwt.sign(payload, process.env.jwtSecret,{expiresIn:"1hr"})
// }
// module.exports = jwtGenerator;

// helpers/jwtGenerator.js

// const jwt = require('jsonwebtoken');

// function jwtGenerator(userId) {
//     return jwt.sign({ userId }, process.env.jwtSecret, { expiresIn: '1h' });
// }

// module.exports = jwtGenerator;



const jwt = require('jsonwebtoken');

// Function to generate JWT
function generateJWT(user) {
    const payload = {
        id: user.id,
        email: user.email,
        // Add more data to payload if needed
    };

    const options = {
        expiresIn: '1h', // Token expiration time
    };

    // Generate and return the token
    return jwt.sign(payload, 'your_secret_key', options);
}

// Example usage:
const user = {
    id: 123,
    email: 'example@gmail.com',
};

const token = generateJWT(user);
console.log(token);

