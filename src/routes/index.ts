import express from 'express';
import auth from './auth-routes';
import user from './user-routes';

const router = express.Router();

export default (): express.Router => {
  auth(router);
  user(router);

  return router;
};
