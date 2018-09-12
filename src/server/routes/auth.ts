import {Router} from 'express';
import * as userController from '../controllers/user';
 
const router = Router();
router.post("/login", userController.postLogin);
router.post("/signup", userController.postSignup);
router.get("/getUser", userController.postGetUser);

export default router;