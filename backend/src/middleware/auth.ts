import jwt, {JwtPayload} from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';


export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    let decodedToken: JwtPayload | string;
    try {
      decodedToken = jwt.verify(token, 'megasecret');
    } catch (err) {
      req.isAuth = false;
      return next();
    }
    if (!decodedToken) {
      req.isAuth = false;
      return next();
    }
    console.log()

    req.userId = decodedToken.toString();
    req.isAuth = true;
    next();
}

