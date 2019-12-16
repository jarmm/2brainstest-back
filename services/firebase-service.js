import * as admin from 'firebase-admin';

const serviceAccount2 = {
  "type": process.env.SA_TYPE,
  "project_id": process.env.SA_PROJECT_ID,
  "private_key_id": process.env.SA_PRIVATE_KEY_ID,
  "private_key": process.env.SA_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.SA_CLIENT_EMAIL,
  "client_id": process.env.SA_CLIENT_ID,
  "auth_uri": process.env.SA_AUTH_URI,
  "token_uri": process.env.SA_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.SA_AUTH_PROVIDER_X509,
  "client_x509_cert_url": process.env.SA_CLIENT_X509
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount2),
    databaseURL: process.env.FIREBASE_DBURL
});
  
  export default admin