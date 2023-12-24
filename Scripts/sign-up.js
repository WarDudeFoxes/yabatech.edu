import { studentData } from "./Data/student-data.js";
import { signUpValidation, focusValidation } from "./utils/signup-validation.js";


const createBtn = document.querySelector('button');
createBtn.addEventListener('click', () => {
  const surname = document.querySelector('.surname');
  const firstName = document.querySelector('.first-name');
  const otherName = document.querySelector('.other-name');
  const phoneNum = document.querySelector('.phone-number');
  const email = document.querySelector('.email');
  const gendar = document.querySelector('.gendar');
  const day = document.querySelector('.days');
  const month = document.querySelector('.months');
  const year = document.querySelector('.year');
  const programType = document.querySelector('.program-type');
  const program = document.querySelector('.program');
  const check = document.querySelector('.check');
  const stateElem = document.querySelector('.state');
  const localGovt = document.querySelector('.local-govt');
  const homeAddress = document.querySelector('.home-address');
 
  formValidtaion(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, check, otherName, stateElem, localGovt, homeAddress);
  console.log(studentData);
});


function formValidtaion(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, check, otherName, stateElem, localGovt, homeAddress) {
  
  focusValidation(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, stateElem, localGovt, homeAddress);
  signUpValidation(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, check, otherName, stateElem, localGovt, homeAddress);
};



// surname.setAttribute('onivalid', "setCustomValidity('Please enter a valid name')")