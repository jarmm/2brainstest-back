import * as admin from 'firebase-admin';

const serviceAccount = require("C:/Users/Jorge/Desktop/respaldo/proyectos/node/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://brainstest-94ad6.firebaseio.com'
  });
  
  export default admin