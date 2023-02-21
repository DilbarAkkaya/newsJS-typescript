import App from './components/app/app';
import './global.css';
import { scrollFunction } from './components/view/backTop';

const app = new App();
app.start();
window.onscroll = function () {
    scrollFunction();
};
