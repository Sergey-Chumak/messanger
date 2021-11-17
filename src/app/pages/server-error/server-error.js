import Handlebars from 'handlebars';
import { tmpl } from './server-error.tmpl';

const context = { error: 500 };

const $pageWrapper = document.querySelector('#page-wrapper');
$pageWrapper.innerHTML = Handlebars.compile(tmpl)(context);
