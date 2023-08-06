const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase-admin.json");

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://aplicaciones-3c-default-rtdb.firebaseio.com/"
});

module.exports = app;






