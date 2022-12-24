let nameInput = document.querySelector('.nameInput'); 
let ageInput = document.querySelector('.ageInput'); 
let submitBtn = document.querySelector('.submitBtn'); 
let removeBtn = document.querySelector('.removeBtn'); 
let updateBtn = document.querySelector('.updateBtn'); 
let findInput = document.querySelector('.findInput'); 
let findBtn = document.querySelector('.findBtn'); 
let displayName = document.querySelector(".displayName")
let displayAge = document.querySelector('.displayAge'); 


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const firebaseConfig = {
apiKey: "AIzaSyBqu9o1Axj_nPns_JyHWcojkSsxlXe9GS4",
authDomain: "database-practice-5a39c.firebaseapp.com",
projectId: "database-practice-5a39c",
storageBucket: "database-practice-5a39c.appspot.com",
messagingSenderId: "172524353460",
appId: "1:172524353460:web:60d9a9b2e0305964fd24e1"
};

const app = initializeApp(firebaseConfig);

import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

let db = getDatabase(); 

function insertData() {
    set(ref(db, "people/" + nameInput.value), {
        name: nameInput.value,
        age: ageInput.value
    })
    .then(() => {
        alert('data added successful'); 
    })
    .catch((error) => {
        alert('error'); 
    })
}

function removeData() {
    remove(ref(db, "people/" + nameInput.value)) 
    .then(() => {
        alert('data removed successfully'); 
    })
    .catch((error) => {
        alert('error'); 
    })
}

function updateData() {
    update(ref(db, "people/" + nameInput.value), {
        name: nameInput.value, 
        age: ageInput.value
    })
    .then(() => {
        alert('data updated successfully'); 
    })
    .catch((error) => {
        alert(error); 
    })
}

function findData() {
    const dbref = ref(db); 

    get(child(dbref, "people/" + findInput.value))
    .then((snapshot) => {
        if (snapshot.exists()) {
            displayName.textContent = 'name: ' + snapshot.val().name; 
            displayAge.textContent = 'age: ' + snapshot.val().age; 
        } else {
            alert('no data found'); 
        }
    })
    .catch((error) => {
        alert(error); 
    })
}

submitBtn.addEventListener('click', insertData) 
removeBtn.addEventListener('click', removeData); 
updateBtn.addEventListener('click', updateData); 
findBtn.addEventListener('click', findData); 