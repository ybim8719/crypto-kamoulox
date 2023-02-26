
declare namespace Express {
    interface Request {
      userId?: string;
      isAuth?: boolean;
    }
}