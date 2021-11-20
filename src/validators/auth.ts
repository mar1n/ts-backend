import { check } from "express-validator" ;

const  userSignupValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be at list 6 characters long')
]

export default userSignupValidator;