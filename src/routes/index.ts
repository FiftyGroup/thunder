import express from 'express';
import auth from './auth-routes';

const router = express.Router();

export default (): express.Router => {
  auth(router);

  return router;
};
