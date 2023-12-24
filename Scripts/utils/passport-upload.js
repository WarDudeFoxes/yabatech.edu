import { loginData } from "../Data/login-data.js";
import { saveStudentData, studentData } from "../Data/student-data.js";

export function avatarIconDisplay() {
  const studentImage = document.querySelector('.student-image');
  const studentImageIcon = document.querySelector('.proile-avatar');
  
  if (studentImage.attributes[0].value === '') {
    studentImage.style.display = 'none';
    studentImageIcon.classList.remove('hide');
  } else {
    studentImage.style.display = 'inline';
    studentImageIcon.classList.add('hide');
  };
};
export function navAvatarIconDisplay() {
  const studentImage = document.querySelector('.column-pics');
  const studentImageIcon = document.querySelector('.column-icon');
  
  if (studentImage.attributes[0].value === '') {
    studentImage.style.display = 'none';
    studentImageIcon.classList.remove('hide');
  } else {
    studentImage.style.display = 'inline';
    studentImageIcon.classList.add('hide');
  };
};

export function uploadImage() {

  document.querySelectorAll('.image-input').forEach(element => {
    const reader = new FileReader();
    
    element.addEventListener('change' , (event) => {
      const imageFile = event.target.files[0];
    
      if (imageFile) {
        reader.readAsDataURL(imageFile);
  
        reader.addEventListener('load', () => {
        
          let matchDetails;
          loginData.forEach(data => {
    
            studentData.forEach(info => {
              if (data.phoneNumber === info.phoneNumber) {
                matchDetails = info;
              };
            });
          });
          location.reload();
          matchDetails.image = reader.result;
          saveStudentData();
        });
      };
    });
  });
};

export function alertNote() {

  const imageEl = document.querySelector('.column-pics');
  if (!(imageEl.getAttribute('src'))) {
    alert('Please Upload Your Passport');
  };
}
