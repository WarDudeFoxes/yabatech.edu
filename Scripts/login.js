import { studentData } from "./Data/student-data.js";
import { loginData, saveLoginData } from "./Data/login-data.js";




const profileLink = document.querySelector('.profile-link')
const phoneNumber = document.querySelector('.phone-number');
const surname = document.querySelector('.surname');

profileLink.addEventListener('click', () => {
  const numberValidation = phoneNumberValidation();
  studentData.forEach(data => {

    if ((phoneNumber.value === data.phoneNumber) && ((surname.value).toLowerCase() === data.surname.toLowerCase())) {
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
        if (phoneNumber.value !== element.phoneNumber) {
          return false
        }
      })

      if (!(numberValidation)) {
        phoneNumber.focus();
      } else if (emthy) {
        surname.focus();
      } else if (!notAvail) {
        document.querySelector('small').classList.remove('hide');
        document.querySelector('small').innerHTML = 'Wrong credentials ,try again later';
      }
    }
  });
});


function phoneNumberValidation() {
  const countryCodes = ['091', '081', '070', '090', '080'];
  const phoneNum = document.querySelector('.phone-number');

  const phoneValidation = countryCodes.some(elem => phoneNum.value.match('^' + elem) && (phoneNum.value.length > 10 && phoneNum.value.length < 12));
  return phoneValidation;
};