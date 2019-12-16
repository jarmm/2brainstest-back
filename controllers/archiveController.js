const fs = require('fs');
const moment = require('moment');

function writeError(errorName){
    const todayDate = getDate();
    const momenTime = getTime();
    fileExists(`error${todayDate}.txt`, (err, exists) => {
        if(err) {
          throw err;
        }
        if(exists) {
            fs.writeFile(`error${todayDate}.txt`, '\r\nError: ' + errorName + 'Time: ' + momenTime, (err) => {
                if (err) throw err;
                console.log(`Archive updated ${todayDate}`);
              });
        } else {
            fs.appendFile(`error${todayDate}.txt`, '\r\nError: ' + errorName + 'Time: ' + momenTime, (err) => {
                if (err) throw err;
                console.log(`Archive created ${todayDate}`);
              });
        }
      });
}


function fileExists(file, cb) {
    fs.stat(file, (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          return cb(null, false);
        } else { 
          return cb(err);
        }
      }
     
      return cb(null, stats.isFile());
    });
}  

function getDate(){
    let date = moment().format('DD-MM-YYYY');
    return date;
}

function getTime(){
    let time = moment().format('HH:mm:ss');
    return time;
}

export default {
    writeError
}  
