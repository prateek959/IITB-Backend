import argon2 from 'argon2';
import User from '../models/userSchema.js';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        let data = await User.findOne({ email: email });

        if (data) {
            return res.status(400).json({ msg: "User is already exists" });
        }

        const hashPass = await argon2.hash(password);

        data = await User.create({
            username,
            email,
            password: hashPass,
            role
        });

        res.status(201).json({ msg: "User register successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const data = await User.findOne({ email });

        if (!data) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const verifyPass = await argon2.verify(data.password, password);

        if (!verifyPass) {  // Corrected the check here
            return res.status(400).json({ msg: "Login credentials are invalid" });
        }

        const token = jwt.sign({ email, role: data.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15min" });

        res.status(200).json({ msg: "Login successful", token });

    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


const getUser = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ msg: "Id is required" });
        }

        const data = User.findById(id);
        if (!data) {
            return res.status(400).json({ msg: "User is not found" });
        }

        res.status(200).json(data);

    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, email } = req.body;
        if (!id) {
            return res.status(400).json({ msg: "Id is required" });
        }

        const data = User.findById(id);
        if (!data) {
            return res.status(400).json({ msg: "User is not found" });
        }

        if (username) {
            data.username = username;
        }
        if (email) {
            data.email = email;
        }

        res.status(200).json({ msg: "User updated Successfully" });

    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        await User.findById(id);
        res.status(200).json({ msg: "User deleted successfully" });

    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}



export { register, login, getUser, updateUser, deleteUser};
