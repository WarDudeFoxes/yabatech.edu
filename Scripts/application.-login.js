import { studentData } from "./Data/student-data.js";
import { loginData, saveLoginData } from "./Data/login-data.js";


const profileLink = document.querySelector('.profile-link');
const email = document.querySelector('.email');
const surname = document.querySelector('.password');



profileLink.addEventListener('click', () => {
  const emailValidation = emailCheck()

  studentData.forEach(data => {

    if ((email.value === data.email) && ((surname.value).toLowerCase() === data.surname.toLowerCase())) {
      profileLink.setAttribute('href', 'yabatech-profile.html');
      
      loginData.length = 0;
      loginData.push({
        phoneNumber: data.phoneNumber
      });
      saveLoginData();
      document.querySelector('small').classList.add('hide');
    } else {
      const emthy = (surname.value === '') || (surname.value.length < 2);

      const notAvail = studentData.forEach(element => {
        if (email.value !== element.email) {
          return false
        }
      })

      if (!(emailValidation)) {
        email.focus();
      } else if (emthy) {
        surname.focus();
      } else if (!notAvail) {
        document.querySelector('small').classList.remove('hide');
        document.querySelector('small').innerHTML = 'Wrong credentials ,try again later';
      }
    }
  });
});



 function emailCheck() {
  const email = document.querySelector('.email');

  const emailValidation = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value)
  return emailValidation;
}; 