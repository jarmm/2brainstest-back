import express from 'express';
import userCtrl from '../controllers/userController';
import createUser from '../controllers/authController';
import {checkIfAuthenticated} from '../middlewares/auth-middleware';

const router = express.Router();

router.get('/get-users/:quantity', async(req, response) => {
    try {
        userCtrl.getUsers(req, response);
    } catch (err) {
          throw(err);
    }
});

router.get('/get-user-from-redis', checkIfAuthenticated, async(req, response) => {
    userCtrl.getRedisUsers(response);
});

module.exports = router;