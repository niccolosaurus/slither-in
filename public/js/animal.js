let currentImage

const newAnimalHandler = async (event) => {
    event.preventDefault();

    const form = document.getElementById('animal-form');
    const formData = new FormData(form);

    //sample form value object
    /* {
        "name":"Snake 1",
        "type":"Snake",
        "species":"Boa Constrictor",
        "sex":"female",
        "age":"2 Years",
        "pattern":"Albino",
        "description":"Pretty",
        "breeding":"Good"
        "gravid": false
    } */

    const gravidCheckbox = document.getElementById("gravid").checked;
    const deceasedCheckbox = document.getElementById("deceased").checked;
    const forSaleCheckbox = document.getElementById("forSale").checked;

    let formValue = {};
    formData.forEach((value, key) => formValue[key] = value);
    if (gravidCheckbox) {
        formValue.gravid = true
    };

    if (deceasedCheckbox) {
        formValue.deceased = true
    };

    if (forSaleCheckbox) {
        formValue.forSale = true
    };

    // alert("Here" + JSON.stringify(formValue));
    const response = await fetch('/api/animals', {
        method: 'POST',
        body: JSON.stringify({
            ...formValue,

            image: currentImage,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        const errors = await response.json();
        alert('Failed to create a new animal due to backend error: ' + JSON.stringify(errors, undefined, 4));
    }
}

// Event listener for the login button.
const loginBtn = document.getElementById('animal-form');
loginBtn.addEventListener('submit', newAnimalHandler);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCGNeNTDF1spTcG0qonviP3S3NwyYDr1gg",
    authDomain: "slither-in-184c6.firebaseapp.com",
    projectId: "slither-in-184c6",
    storageBucket: "slither-in-184c6.appspot.com",
    messagingSenderId: "131632929877",
    appId: "1:131632929877:web:bf27a94cbd40ce2862c8dc",
    measurementId: "G-6W779P6JK8"
};

function configureDropzone() {
    const myDropzone = new window.Dropzone("#my-form", {
        accept: (file, done) => {
            const app = firebase.initializeApp(firebaseConfig);

            const output = document.querySelector("#output");
            output.innerHTML += `<div>File added: ${file.name}</div>`;

            const uuid = window.crypto.randomUUID();
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child(`${uuid}.png`);

            imageRef.put(file).then((snapshot) => {
                const fullpath = `https://firebasestorage.googleapis.com/v0/b/slither-in-184c6.appspot.com/o/${uuid}.png?alt=media`
                output.innerHTML += `<div>File added: ${fullpath}</div>`;
                currentImage = fullpath;
                console.log('Uploaded a blob or file!');
                done();
            }).catch(() => {
                alert('Failed to upload to backend');
            });
        }
    });
    myDropzone.autodiscover = false;
}

// Bootstrap Dropzone
configureDropzone();

const maleBtn = document.getElementById("maleHidden");
const dropdown = document.getElementById('sex');
dropdown.onchange = function () {
    let targetValue = document.getElementById('sex').value;
    if (targetValue === "Male") {
        maleBtn.style.display = "none";
    } else {
        maleBtn.style.display = "block";
    }
};

function onClick() {
    var gravidCheckBox = document.getElementById("gravid");
    var gravidDisplayMessage = document.getElementById("gravid-message");
    if (gravidCheckBox.checked == true) {
        gravidDisplayMessage.style.display = "block";
    } else {
        gravidDisplayMessage.style.display = "none";
    }

    var forSaleCheckbox = document.getElementById("forSale");
    var forSaleDisplayMessage = document.getElementById("for-sale-message");
    if (forSaleCheckbox.checked == true) {
        forSaleDisplayMessage.style.display = "block";
    } else {
        forSaleDisplayMessage.style.display = "none";
    }

    var deceasedCheckBox = document.getElementById("deceased");
    var deceasedDisplayMessage = document.getElementById("deceased-message");
    if (deceasedCheckBox.checked == true) {
        deceasedDisplayMessage.style.display = "block";
    } else {
        deceasedDisplayMessage.style.display = "none";
    }
}

