import './sass/style.scss'

import { getElement,createElement, setAttributes } from './util';
import navBar from './components/navbar';
console.log('hello, World!');
// const body = document.querySelector('body');
const navbar = navBar()
const body = getElement('body');
body.appendChild(navbar)
