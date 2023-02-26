import bodyParser from 'body-parser';
import router from './routes/external-apis';
import express, { ErrorRequestHandler } from 'express';
import { graphqlHTTP } from 'express-graphql'
import mongoose from 'mongoose';
import { auth } from './middleware/auth';
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.userId
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(auth);
app.use(router);

app.use(((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
}) as ErrorRequestHandler);

mongoose.connect(
  'mongodb+srv://pascal:niji@cluster0.idwipl1.mongodb.net/messages?retryWrites=true&w=majority'
).then(result => {
  app.listen(3001);
}).catch(err => console.log(err));

