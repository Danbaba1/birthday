import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { addUser } from '../services/userService';

export const registerUser = async (req: Request, res: Response): Promise<void>=> {
  try {
    const result = await addUser(req.body);
    if (!result.success) {
      res.status(400).send(result.error);
      return;
    }
    res.status(201).send("User registered successfully");
  } catch (error: any) {
    res.status(500).send(error.message || "Internal Server Error");
  }
};



export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { identifier, password } = req.body;
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });

    if (!user) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.json({ token });
  } catch (error: any) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
