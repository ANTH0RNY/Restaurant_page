import { createElement, setAttributes } from "../util";
import '../sass/navBar.scss'

function navBar() {
    const navBar = createElement('nav');
    const ul = createElement('ul')
    const navBrand = createElement('div')

    const listItems = [
        {
            title: 'Menu'
        },
        {
            title: 'Contacts'
        },
        {
            title: 'Reservation'
        },
        {
            title: 'About'
        },
    ]

    for (const i of listItems) {
        const item = createElement('li')
        setAttributes(item,{class: "nav-item"})
        item.textContent = i.title;
        ul.appendChild(item)
    }
    navBrand.classList.add('Nav-brand')
    navBrand.innerHTML="Anime Food"
    navBar.appendChild(navBrand)
    navBar.appendChild(ul)
    navBar.classList.add('nav-bar')
    return navBar
}

export default navBar