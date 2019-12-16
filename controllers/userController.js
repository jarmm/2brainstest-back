import redisCtrl from './redisController';
import archiveCtrl from './archiveController';
const request = require('request');
const axios = require('axios');

const getUsers = async (req, response) => {
    console.log("Getting data from randomuser...");
    const quantity = req.params.quantity;
    console.log("Quantity: "+ quantity +"...");
    try {
        const res = await axios.get(`https://randomuser.me/api/?results=${quantity}`)
        const data = res.data;
        const range = Math.random() * 10;
        if(range < 2){
            console.log("Range error")
            archiveCtrl.writeError('Range Error');
            //getUsers(req, res) 
        }
        redisCtrl.savingUsers('users', data.results);
        response.json(data.results);
    } catch (error) {
        response.status(500).json({
            message:'Server Error',
            error
        }) 
    }
}

function getRedisUsers (response) {
    redisCtrl.gettingUsers(response, 'users');
}

export default {
    getUsers,
    getRedisUsers
}  
