const redis = require('redis');
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
//const client = require('redis').createClient(process.env.REDIS_URL);

function savingUsers (storedName, data) {
    console.log("Setting data to Redis...");
    try {
        client.set(storedName, JSON.stringify(data));
        client.expire(storedName, 60)
    } catch (error) {
        console.error(error);
    }
}

function gettingUsers (response, storedName) {
    console.log("Getting data from Redis...");
    client.get(storedName, function(err, results) { 
        if(err) {
            response.status(400).json({
                message:'Error',
                err
            }) 
        } else {
            response.json(JSON.parse(results)); 
        }
    }); 
}

export default {
    savingUsers,
    gettingUsers
}  
