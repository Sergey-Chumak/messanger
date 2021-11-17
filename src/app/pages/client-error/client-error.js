import Handlebars from 'handlebars';
import { tmpl } from './client-error.tmpl';

const $pageWrapper = document.querySelector('#page-wrapper');
$pageWrapper.innerHTML = Handlebars.compile(tmpl)({});
