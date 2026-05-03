import { NextFunction, Request, Response } from 'express';
import { jwtDecode } from 'jwt-decode';
import { z } from 'zod';

const secretKey = process.env.JWT_SECRET || 'default-secret';

const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = req.headers.authorization as string;

  try {
    const decoded = jwtDecode(token) as { userId: string };
    const userId = decoded.userId;

    // Add more validation here if needed, e.g., token expiration
    req.userId = userId;
    next();
  } catch (error) {
    console.error('JWT Decode Error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;