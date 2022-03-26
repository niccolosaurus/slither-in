import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

const newAnimalHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const type = document.querySelector('type').value.trim();
    const species = document.querySelector('species').value.trim();
    const sex = document.querySelector("sex")
    const age = docuemnt.querySelector('age')
    const pattern = document.querySelector('pattern')
    const description = document.querySelector('description').value.trim
    const gravid = document.querySelector('gravid')
    const forSale = document.querySelector('forSale')
    const deceased = document.querySelector('deceased')
    const breeding = document.querySelector('breeding')

    if (name && type && species && sex && age && pattern && description && gravid && forSale && deceased && breeding) {
        const response = await fetch('/api/animals', {
            method: 'POST',
            body: JSON.stringify({ name, type, species, sex, age, pattern, description, gravid, forSale, deceased, breeding }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
}

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCGNeNTDF1spTcG0qonviP3S3NwyYDr1gg",

    authDomain: "slither-in-184c6.firebaseapp.com",

    projectId: "slither-in-184c6",

    storageBucket: "slither-in-184c6.appspot.com",

    messagingSenderId: "131632929877",

    appId: "1:131632929877:web:bf27a94cbd40ce2862c8dc",

    measurementId: "G-6W779P6JK8"

};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const myDropzone = new window.Dropzone("#my-form");

const output = document.querySelector("#output");

myDropzone.on("addedfile", (file) => {
    // Add an info line about the added file for each file.
    output.innerHTML += `<div>File added: ${file.name}</div>`;
});