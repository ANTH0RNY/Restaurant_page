import "./sass/style.scss";
import { getElement, createSetElement } from "./util";
import listItems from "./components/navItems";
import navBar from "./components/navbar";

console.log("hello, World!");

const navbar = navBar();
const body = getElement("body");
const main = createSetElement("div", { class: "body main" });

listItems.forEach((value, index)=>{
    value.el.classList.add('not-visible')
    main.appendChild(value.el)
})


body.appendChild(navbar);
body.appendChild(main);

navbar.firstElementChild.click()