const firebaseConfig = {
  apiKey: 'AIzaSyAUWv2YD3DI2Uu1Il4P0vZXiu1CisVW3b4',
  authDomain: 'contactform-5daa2.firebaseapp.com',
  databaseURL: 'https://contactform-5daa2-default-rtdb.firebaseio.com',
  projectId: 'contactform-5daa2',
  storageBucket: 'contactform-5daa2.firebasestorage.app',
  messagingSenderId: '1047868291041',
  appId: '1:1047868291041:web:84200196ad8d6d3b8404a0',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var message = getElementVal('message');
  // console.log(name, email, message);

  saveMessages(name, email, message);

  //enable alert

  document.querySelector('.alert').style.display = 'block';

  // remove the alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 1000);

  //reset form
  document.getElementById('contactForm').reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
