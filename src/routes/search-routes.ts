import express from 'express';
import { authMiddleware } from "../middlewares";
import { UserSearchController } from '../controllers/search/user/UserSearchController';

const userSearchController = new UserSearchController();

export default (router: express.Router) => {
  router.get('/user', authMiddleware, (req, res) => userSearchController.getUsersByName(req, res)); 
}