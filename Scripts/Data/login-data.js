export const loginData = JSON.parse(localStorage.getItem('logins')) ||
[{
  phoneNumber: '09065721134'
}];


export function saveLoginData() {
  localStorage.setItem('logins', JSON.stringify(loginData));
};