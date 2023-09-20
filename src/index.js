import './sass/style.scss'

import { getElement, createSetElement } from './util';
import navBar from './components/navbar';
import createImageSlider from './components/scroll'
console.log('hello, World!');

const navbar = navBar()
const imageSlider=createImageSlider()

const body = getElement('body');
const main = createSetElement("div", {class: "body main"})
body.appendChild(navbar)
body.appendChild(main)
main.appendChild(imageSlider)
