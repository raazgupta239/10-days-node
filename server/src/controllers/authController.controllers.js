import pool from "../config/db.config.js";
import bcrypt from 'bcrypt';


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Query the database to find the user by email
        const userCount = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        // If the user doesn't exist, send an error message
        if (userCount.rowCount === 0) {
            return res.status(400).json({
                message: "Incorrect email or password"
            });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, userCount.rows[0].password);

        if (isPasswordValid) {
            // Remove the password field from the response before sending it
            const { password, ...userWithoutPassword } = userCount.rows[0];
            
            return res.status(200).json({
                message: "Login successful",
                user: userWithoutPassword
            });
        } else {
            return res.status(400).json({
                message: "Incorrect email or password"
            });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            message: "Server error during login"
        });
    }
};

export const signupUser = async (req, res) => {
    const { userName, email, password } = req.body;





    try {

        const existingUser = await pool.query('select * from users where email =$1', [email]);
        if (existingUser.rowCount > 0) {
            return res.status(409).json({
                message: "user already exists, please login"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (userName, email, password) VALUES ($1, $2, $3) RETURNING user_id, userName, email',
            [userName, email, hashedPassword]
        );

        res.status(201).json({

            message: "User created successfully",
            user: result.rows[0]
        });

    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Server error during signup.' });
    }
};
