import "./sass/style.scss";
import { getElement, createSetElement } from "./util";
import navBar from "./components/navbar";
import createMenu from "./components/menu";
import HomeView from './views/HomeView'

console.log("hello, World!");

const navbar = navBar();

const body = getElement("body");
const main = createSetElement("div", { class: "body main" });
const menu = createMenu();

body.appendChild(navbar);
body.appendChild(main);
// HomeView(main)
main.appendChild(menu);
