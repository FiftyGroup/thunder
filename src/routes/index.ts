import express from 'express';
import auth from './auth-routes';
import searchRoutes from './search-routes';

const router = express.Router();

export default (): express.Router => {
  auth(router);
  searchRoutes(router);
  return router;
};
