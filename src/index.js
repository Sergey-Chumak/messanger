import './styles.scss';
import last from './app/utils/last';

(async function () {
  await import('./app/layout/main');

  if (last(document.location.href.split('/')) === ('profile')) {
    import('./app/pages/profile');
  } else if (last(document.location.href.split('/')) === 'auth' || document.location.href === 'http://localhost:3000/') {
    import('./app/pages/auth');
  } else if (last(document.location.href.split('/')) === 'registration') {
    import('./app/pages/registration');
  } else if (last(document.location.href.split('/')) === 'server-error') {
    import('./app/pages/server-error');
  } else if (last(document.location.href.split('/')) === 'chat-page') {
    import('./app/pages/chat-page');
  } else {
    import('./app/pages/client-error');
  }
}());
