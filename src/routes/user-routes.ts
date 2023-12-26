import express from 'express';
import FindByUsername from '../controllers/user/findByUsername';

export default (router: express.Router) => {
  router.get('/user/:username', FindByUsername.handle);
};
