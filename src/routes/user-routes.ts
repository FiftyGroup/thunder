import express from 'express';
import { findByUsername } from '../controllers/user/findByUsername';

export default (router: express.Router) => {
  router.get('/user/:username', findByUsername);
};
