import { studentData, saveStudentData } from "../Data/student-data.js";
import { loginData, saveLoginData } from "../Data/login-data.js";


export function signUpValidation(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, check, otherName, stateElem, localGovt, homeAddress) {
  const phoneValidation = phoneNumberValidation();
  const emailValidation = emailCheck();
  
  if (((surname.value !== '') && (surname.value.length > 1)) && ((firstName.value !== '') && (firstName.value.length > 1)) && (phoneValidation) && (emailValidation) && (gendar.value !== 'Select') && (month.value !== 'Month') && (((year.value > 1900) && (year.value < 2007))) && (programType.value !== 'Active Application') && (program.value !== 'Select Programs') && (stateElem.value !== 'State Of Origin') && ((localGovt.value !== '') && (localGovt.value.length > 1)) && ((homeAddress.value.length > 4) && (homeAddress.value !== ''))) {
    
    if (check.checked) {
      
      loginData.length = 0;
      loginData.push({
        phoneNumber:  phoneNum.value
      });
      saveLoginData();

      studentData.push({
        surname: `${surname.value[0].toUpperCase() + surname.value.substring(1)}`,
        firstName: `${firstName.value[0].toUpperCase() + firstName.value.substring(1)}`,
        otherName: otherName.value ? `${otherName.value[0].toUpperCase() + otherName.value.substring(1)}` : '',
        phoneNumber: phoneNum.value,
        email: email.value,
        gender: gendar.value,
        month: month.value,
        day: day.value,
        year: year.value,
        programType: programType.value,
        program: program.value,
        localGovt: localGovt.value,
        stateElem: stateElem.value,
        homeAddress: homeAddress.value,
        image: ''
      });
      saveStudentData();
      const link = document.querySelector('.sign-up-link');
      link.setAttribute('href', 'yabatech-profile.html');
    };
  };
};

export function focusValidation(surname, firstName, phoneNum, email, gendar, day, month, year, programType, program, stateElem, localGovt, homeAddress) {
  const phoneValidation = phoneNumberValidation();
  const emailValidation = emailCheck();

  if (surname.value === '' || surname.value.length < 2) {
    surname.focus();
  } else if (firstName.value === '' || (firstName.value).length < 2) {
    firstName.focus();
  } else if (!phoneValidation) {
    phoneNum.focus();
  } else if (!emailValidation) {
    email.focus();
  } else if (gendar.value === 'Select') {
    gendar.focus();
  } else if (day.value === 'Day') {
    day.focus();
  } else if (month.value === 'Month') {
    month.focus();
  } else if (!((year.value > 1900) && (year.value < 2007))) {
    year.focus();
  }  else if (programType.value === 'Active Application') {
    programType.focus();
  } else if (program.value === 'Select Programs') {
    program.focus();
  } else if ((homeAddress.value === '') || (homeAddress.value.length < 5)) {
    homeAddress.focus();
  } else if (stateElem.value === 'State Of Origin') {
    stateElem.focus();
  } else if ((localGovt.value === '') || (localGovt.value.length < 3)) {
    localGovt.focus();
  };
};

function phoneNumberValidation() {
  const countryCodes = ['091', '081', '070', '090', '080'];
  const phoneNum = document.querySelector('.phone-number');

  let matchingNumber;
  studentData.forEach(element => {
    if (element.phoneNumber === phoneNum.value) {
      matchingNumber = element.phoneNumber
    }
  });

  const phoneValidation = countryCodes.some(elem => phoneNum.value.match('^' + elem) && (phoneNum.value.length > 10 && phoneNum.value.length < 12) && (!matchingNumber));
  return phoneValidation;
};

export function emailCheck() {
  const email = document.querySelector('.email');

  let matchingEmail;
  studentData.forEach(element => {
    if (element.email === email.value) {
      matchingEmail = element.email
    }
  });


  const emailValidation = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value) && !(matchingEmail);
  return emailValidation;
}; 