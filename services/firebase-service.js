import * as admin from 'firebase-admin';

//const serviceAccount = require("C:/Users/Jorge/Desktop/respaldo/proyectos/node/serviceAccountKey.json");

const serviceAccount = {
  "type": "service_account",
  "project_id": "brainstest-94ad6",
  "private_key_id": "1fdd16d031d24ed0b31ca0dbdde1da4bba6c5415",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCYADIn5RjMH0th\nxHXk+vCYSqHnbxe586CSIWrN1W/IJ8HKthaTMPW8D4RFaqvoYE8EKGVG2FupH/wr\n/WP2BXTZ+xe5xaCwxJpzTbVVneLm4dUrbiq7lR6J+kqsjY4yubCSDEZmSGCL+Elh\nOJl7YmiAle+HWXHoGQErmO5ltcX3BCW7j84hvqKeSyV2PjlnuxNmNyg7IJPeU4Yr\n7Fd0LJw71t15bUBeuuRaUNKhyV0i8PLYWBhMxOJbbHfA6+p5zzihERXT6Ub+BJNC\n3/ti6cGabaNrOGFjRFmt5yK+fOF+pfhspfrIcXQb3z2J9HGXk6n3t+t526OES2Oj\nNAfgASMxAgMBAAECggEABza91U42frw0JqqynFsbKg8jX0l9dcd4j8GNlmvnxzcO\nfSFmhuEkTc2VYySsjfXBf5qvMSKO5G2ZLo6dvOJbaQZVWkK6h/PSD2DZF1F2oFXd\neRcxvf9WGLRL8Pky43i+nDUq7ischz1nC3nVMZmPs3KU5faPxQp9bLqbAzFno3vN\n2Q2d9rhbLip3/QJF+hb5QvnwaaxA/8KhXX+A7qV13xsZKexy8t/a7nwZj/Qrfdyk\nUgNCINV/Dpw03Tl1wD7HJ4BEkr8I7jNB3/XmBwjhCTNYLhGlTfa+pyyLFf1AiDAQ\nP4OU6S6bVtdJHdB6ouml8olVIceNlor4ebncJLa+cQKBgQDHMPbtu2XZCQsuZcCc\nGaRJzULiXR58kFJryu2AIgvhKu4YRkwEaympPZBj31/62lINPjshEyaY40OISFXl\n9Yhz3PjqgqSQCCo21TpI3AE8XU7PIZ1Ko5VumYVAQv6YgZ1MQvyXqszU14LUNptu\nVIRhA7l/xt/ggzCg/NckM3K57QKBgQDDWdVl0WamiE1CMrxqU9rB3WOZ7xKwZKtG\nUeOsCvSZcD/3IWIvMdyjshSEtA66YFBclyhI8pdo38oNVxaN/hLa9zoLvPURnXfO\nirFNtQ/3gDI44vv1xqzdXlwMB9pCuXBXskbU4e2qztS/Ka3cYZJpEJYAVciljuZU\naW23z/wV1QKBgF87jMMqVk5GoZ7kLQs0wzQ5u6GIDbxWL+GzWotpO67CnKTkbxGp\nvnhYo8DsGfJQEOyd9R0iD9EGztHIa7EPC9cBLczI+y6ViMFAfqY48SpQHg6vrojx\n3s7K/Uc1AI4fYfoFCMjmcxnLk5QsK3G7XLMZWcW6amznrAc7+wwmwNIdAoGAKY7U\n3QI9KjRY6zpL5vrL0O4+ICNCAJCJ9z24h4MVIgdFNFe/wXaED7b0sn5zm6adsfTe\nNxaUq1TgcRIT1EU20apCiPi70fGD6UaMDZH1QZveE0gGffS0FavbPRv2jLdSdPWS\nJ/ugSfQSQlClkfqX4Q4MOyoEs2PBEDgVhUMTx7kCgYA0Vb8MCwylc6gvbYF0JO8F\nxToF/OTySRzlTWzFFwQAgR9Cjt61SGxpdlH3JKtzl2V7A+UaDwzSgBlcDFphvSwA\nGX4GJEnXf9N+1bB6lKdwSrcduTn/N979XDaUC7hkzsT8nXjpKKZ+M6LNuwoUJEAL\n4cZKhKCxLN9H+zIepK3/ww==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-i8dzh@brainstest-94ad6.iam.gserviceaccount.com",
  "client_id": "115179422291424814277",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i8dzh%40brainstest-94ad6.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://brainstest-94ad6.firebaseio.com'
  });
  
  export default admin