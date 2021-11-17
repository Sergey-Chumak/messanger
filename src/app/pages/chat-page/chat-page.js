import Handlebars from 'handlebars';
import { tmpl } from './chat-page.tmpl';
import { chatList } from '../../components/chat-list';
import { chat } from '../../components/chat';
import { plugDialog } from '../../components/plug-dialog';

Handlebars.registerPartial('chatList', chatList({ class: 'chat__chat-list' }));

Handlebars.registerPartial('chat', chat({ class: 'chat__dialog' }));

Handlebars.registerPartial('plugDialog', plugDialog({}));
const $pageWrapper = document.querySelector('#page-wrapper');
$pageWrapper.innerHTML = Handlebars.compile(tmpl)({});
