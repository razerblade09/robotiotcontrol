    // // Firebase configuration and initialization
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
    // import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
    // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

    // const firebaseConfig = {
    //     apiKey: "AIzaSyA8u5p6YbJGvFLHVhtruqaYQDjzWA7QAd0",
    //     authDomain: "robot-car-iot-146ba.firebaseapp.com",
    //     databaseURL: "https://robot-car-iot-146ba-default-rtdb.asia-southeast1.firebasedatabase.app",
    //     projectId: "robot-car-iot-146ba",
    //     storageBucket: "robot-car-iot-146ba.appspot.com",
    //     messagingSenderId: "521430468905",
    //     appId: "1:521430468905:web:557066eea0f10665a68f38",
    //     measurementId: "G-49GDMDCX12"
    // };

    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    // const database = getDatabase(app);

    // // Function to send commands to Firebase
    // window.sendCommand = function(command) {
    //     const commandRef = ref(database, 'commands');
    //     set(commandRef, command)
    //         .then(() => {
    //             console.log('Command sent:', command);
    //         })
    //         .catch((error) => {
    //             console.error('Error sending command:', error);
    //         });
    // }
