// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       required:
//  *         - name
//  *         - email
//  *         - password
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: The auto-generated ID of the user
//  *         name:
//  *           type: string
//  *           description: The user's name
//  *         email:
//  *           type: string
//  *           description: The user's email
//  *         password:
//  *           type: string
//  *           description: The user's password (hashed)
//  *       example:
//  *         id: 12345
//  *         name: John Doe
//  *         email: john@example.com
//  *         password: hashedpassword123
//  */

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Middleware to hash the password before saving
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// // Compare hashed password with plain text
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the user
 *         name:
 *           type: string
 *           description: The user's name
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         id: 12345
 *         name: John Doe
 *         email: john@example.com
 *         password: hashedpassword123
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
