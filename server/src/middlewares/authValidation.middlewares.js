import { isValidEmail, isValidPassword } from "../utils/validationHelpers.js";


export const loginInputValidate = (req, res, next) => {

    const { email, password } = req.body;



    //validate email presence
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }



    // Validate email
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Validate password presence
    if (!password) {
        return res.status(400).json({ message: 'Password is required.' });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    // Validate password format (numeric and special char)
    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must include at least one special character and one number.' });
    }

    next();
};


export const signinInputValidate = (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || userName.trim().length < 3) {
        return res.status(400).json({ message: 'Username must be at least 3 characters long.' });
    }


    //validate email presence
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    // Validate email
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Validate password presence
    if (!password) {
        return res.status(400).json({ message: 'Password is required.' });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    // Validate password format (numeric and special char)
    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must include at least one special character and one number.' });
    }

    next();

}