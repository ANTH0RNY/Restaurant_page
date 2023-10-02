import { createElement, setAttributes, createFullElement } from "../util";
import listItems from "./navItems";
import '../sass/navBar.scss'

function navBar() {
    const navBar = createElement('nav');
    const ul = createElement('ul')
    const navBrand = createElement('div')


    listItems.forEach((value, index) => {
        if (index === 0) {
            navBrand.classList.add('Nav-brand')
            navBrand.addEventListener('click', () => {
                addClass()
                value.el.classList.remove('not-visible')
            })
            navBrand.innerHTML = "Anime Food"
        }
        else {
            const item = createFullElement('li', { class: "nav-item" }, value.title)
            item.addEventListener('click', () => {
                console.log(`hello, World ${index}`);
                addClass()
                value.el.classList.remove('not-visible')
            })
            ul.appendChild(item)
        }
    })
    navBar.appendChild(navBrand)
    navBar.appendChild(ul)
    navBar.classList.add('nav-bar')
    return navBar
}

function addClass() {
    listItems.forEach((value) => {
        value.el.classList.add('not-visible')
    })
}
export default navBar