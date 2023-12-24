 import { loginData, saveLoginData } from "../Data/login-data.js";

export function profileController() {

  const dashboardLink = document.querySelector('.js-dashboard');
  const settingsLink = document.querySelector('.js-settings');
  
  const otherLink = document.querySelector('.js-other-link');
  const menu = document.querySelector('.fa-bars');
  const logout = document.querySelector('.fa-power-off')

  settingsLink.addEventListener('click', () => {
    document.querySelector('.dashboard-options-column').classList.add('hide');
    document.querySelector('.setting-container').classList.remove('hide');
    document.querySelector('.biodata-cont').classList.add('hide');
    document.querySelector('.pop-option-container').classList.add('hide');
    dashboardLink.style.opacity = '.5';
    settingsLink.style.opacity = '.8';
    otherLink.style.opacity = '.5';
  });

  document.querySelectorAll('.js-biodata-link').forEach(element => {
    element.addEventListener('click', () => {
      document.querySelector('.dashboard-options-column').classList.add('hide');
      document.querySelector('.setting-container').classList.add('hide');
      document.querySelector('.biodata-cont').classList.remove('hide');
      document.querySelector('.pop-option-container').classList.add('hide');
      settingsLink.style.opacity = '.5';
      dashboardLink.style.opacity = '.8'
    });
  });

  dashboardLink.addEventListener('click', () => {
    document.querySelector('.setting-container').classList.add('hide');
    document.querySelector('.biodata-cont').classList.add('hide');
    document.querySelector('.dashboard-options-column').classList.remove('hide');
    document.querySelector('.pop-option-container').classList.add('hide');
    dashboardLink.style.opacity = '.8';
    settingsLink.style.opacity = '.5';
    otherLink.style.opacity = '.5';
  });

  otherLink.addEventListener('click', () => {
    document.querySelector('.pop-option-container').classList.toggle('hide');
    otherLink.classList.toggle('opacity');
  });

  menu.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('new-navbar')
    document.querySelector('.left-section').classList.toggle('new-left-section');
    document.querySelector('.right-section').classList.toggle('new-right-section');
    document.querySelector('.element').classList.toggle('new-element');
    document.querySelector('section').classList.toggle('new-section');
    document.querySelector('.element span').classList.toggle('new-element-span');
    document.querySelector('.pop-option-container').classList.replace('absolute','static');
    if (menu.className.includes('fa-bars')) {
      menu.classList.replace('fa-bars', 'fa-times');
    } else {
      menu.classList.replace('fa-times', 'fa-bars');
    };
  });


    
  document.querySelector('.content-container').addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('new-navbar');
    document.querySelector('.left-section').classList.remove('new-left-section');
    document.querySelector('.right-section').classList.remove('new-right-section');
    document.querySelector('.element').classList.remove('new-element');
    document.querySelector('section').classList.remove('new-section');
    document.querySelector('.element span').classList.remove('new-element-span');
    document.querySelector('.pop-option-container').classList.remove('static');
    menu.classList.replace('fa-times', 'fa-bars');
  });


  logout.addEventListener('click', () => {
    const logoutLink = document.querySelector('.logout-link')

    loginData.length = 0;
    saveLoginData();
    logoutLink.setAttribute('href', 'index.html');
  })
};
