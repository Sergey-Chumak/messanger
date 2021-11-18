import Handlebars from 'handlebars';
import { tmpl } from './profile.tmpl';
import { button } from '../../components/ui/button';

const context = {
  userName: 'Ivan',
  emailValue: 'pochta@yandex.ru',
  loginValue: 'ivanivanov',
  nameValue: 'Ivan',
  lastNameValue: 'Ivanov',
  nicknameValue: 'Ivan',
  phoneValue: '+7 (909) 967 30 30',
  nonAvailableChanges: true,
  changePassword: true,
  oldPasswordValue: 'wdawadaw',
  newPasswordValue: 'dwadwaddwdaw',
  copyNewPasswordValue: 'dawdsdwadwad',
};

Handlebars.registerPartial('saveDataBtn', button({
  name: 'Save',
  color: 'secondary',
  size: 'l',
  id: 'profile-save-button',
}));

Handlebars.registerPartial('savePassBtn', button({
  name: 'Save',
  color: 'secondary',
  size: 'l',
  id: 'profile-save-pass-button',
}));

const $pageWrapper = document.querySelector('#page-wrapper');
$pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);

new Promise((resolve) => {
  resolve();
}).then(() => {
  initHandlers();
});

function initHandlers() {
  goToChangesData();
  goToChangesPass();
}

function goToChangesData() {
  document.querySelector('#link-change-data')
    .addEventListener('click', () => {
      context.nonAvailableChanges = false;
      $pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);
      saveDataChanges();
    });
}

function goToChangesPass() {
  document.querySelector('#link-change-pass')
    .addEventListener('click', () => {
      context.changePassword = false;
      $pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);
      savePassChanges();
    });
}

function saveDataChanges() {
  document.querySelector('#profile-save-button')
    .addEventListener('click', () => {
      context.nonAvailableChanges = true;
      $pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);
      initHandlers();
    });
}

function savePassChanges() {
  document.querySelector('#profile-save-pass-button')
    .addEventListener('click', () => {
      context.changePassword = true;
      $pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);
      initHandlers();
    });
}
