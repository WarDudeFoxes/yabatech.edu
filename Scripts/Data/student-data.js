export const studentData = JSON.parse(localStorage.getItem('yabaTechData')) ||
[{
  surname: 'Ganiu',
  firstName: 'Waris',
  otherName: "Olamilekan",
  phoneNumber: '09065721134',
  email: 'wardude704@gmail.com',
  gender: 'Male',
  day: '29',
  month: 'May',
  year: '2004',
  programType: 'HND',
  program: 'Computer Science',
  localGovt: 'AKINYELE',
  stateElem: 'OYO',
  homeAddress: '3, ori oke otun',
  image: ''
}];


export function saveStudentData() {
  localStorage.setItem('yabaTechData', JSON.stringify(studentData));
};