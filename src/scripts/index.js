import '../scss/index.scss';
import '../cookie-policy.html';

// Variables from the DOM
const hamburgerBtn = document.querySelector('.nav-section__hamburger-btn');
const line1 = document.querySelector('.nav-section__line--line1');
const line2 = document.querySelector('.nav-section__line--line2');
const line3 = document.querySelector('.nav-section__line--line3');
const ulList = document.querySelector('.nav-section__ul-list');

let error = document.querySelector('.error');

// Script to make hamburger button functional
hamburgerBtn.addEventListener('click', () => {
  line1.classList.toggle('nav-section__line--line1-rotate');
  line2.classList.toggle('nav-section__line--line2-fade');
  line3.classList.toggle('nav-section__line--line3-rotate');
  ulList.classList.toggle('nav-section__drop-down');

  // Watch to see if the user scrolls or the window goes above 576px wide. If so, the menu will hide again and the hamburger button will collapse
  addEventListener('scroll', () => {
    ulList.classList.remove('nav-section__drop-down');
    line1.classList.remove('nav-section__line--line1-rotate');
    line2.classList.remove('nav-section__line--line2-fade');
    line3.classList.remove('nav-section__line--line3-rotate');
  });
  
  addEventListener('resize', () => {
    if(window.innerWidth >= 576) {
      ulList.classList.remove('drop-down');
      line1.classList.remove('nav-section__line--line1-rotate');
      line2.classList.remove('nav-section__line--line2-fade');
      line3.classList.remove('nav-section__line--line3-rotate');
    } else if(window.innerWidth < 576) {
      ulList.classList.add('drop-down');
      line1.classList.add('nav-section__line--line1-rotate');
      line2.classList.add('nav-section__line--line2-fade');
      line3.classList.add('nav-section__line--line3-rotate');
    }
  });
});

// This will allow the page link to jump to a certain spot but a certain amount of pixals higher
window.addEventListener('hashchange', () => {
  window.scrollTo(window.scrollX, window.scrollY - 60);
});

// // Variables for the form element
// const form = document.querySelector('.contact-form');
// const name = document.getElementById('input-name');
// const email = document.getElementById('input-email');
// const message = document.getElementById('input-message');
// const cancelButton = document.querySelector('.cancel-button');
// const sendButton = document.querySelector('.send-button');

// // Function to reset form
// cancelButton.addEventListener('click', e => {
//   // HTML will automatically put the form back to its initial state unless we do
//   e.preventDefault();
//   // Programmatically we can reset it
// form.reset();
// });

// // // Function to validate the form and ultimately submit the name and email inputs, as well as the message from the textarea
// // form.addEventListener('submit', e => {
// //   e.preventDefault();

// //   checkInputs();
// // });

// // function checkInputs() {
// //   // Get the values from the inputs
// //   const nameValue = name.value.trim();
// //   const emailValue = email.value.trim();
// //   const messageValue = message.value.trim();

// //   // Check name input
// //   if(nameValue === '') {
// //     // Show error
// //     // Add error class
// //     setErrorFor(name, 'Name field can not be blank');
// //     nameValue === '' ? name.classList.add('input-field-error') : name.classList.add('input-field-success');
// //     nameValue !== '' ? name.classList.remove('input-field-error') : name.classList.remove('input-field-success');
// //   } else {
// //     // Add success class
// //     setSuccessFor(name);
// //   }

// //   // Check email input
// //   if(emailValue === '') {
// //     // Show Error
// //     // Add error class
// //     setErrorFor(email, 'Email field can not be blank');
// //     email.classList.add('input-field-error');
// //   } else if(!isEmail(emailValue)) {
// //     setErrorFor(email, 'Please enter a valid email');
// //     email.classList.add('input-field-error');
// //   } else {
// //     setSuccessFor(email)
// //   }

// //   // Check message input
// //   if(messageValue === '') {
// //     // Show Error
// //     // Add error class
// //     setErrorFor(message, 'Message field can not be blank');
// //     message.classList.add('input-field-error');
// //   } else {
// //     setSuccessFor(message)
// //   }
// // }

// // function setErrorFor(input, message) {
// //   let formError = input;
// //   formError.value = message;
// // };

// // function setSuccessFor(input) {
  
// // };

// // function isEmail(email) {
// // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// // }

// Code to inject the Year in the paragraph element of the footer
let currentYearSpan = document.querySelector('.year');
let currentYear = new Date().getFullYear();

currentYearSpan.innerText = currentYear;



