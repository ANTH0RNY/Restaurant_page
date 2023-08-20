import { createElement, setAttributes } from "../util";

function navBar(){
    const navBar = createElement('nav');
    
    const listItems=[
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
    
    for (const i of listItems){
        const item = createElement('div')
        item.textContent= i.title;
        navBar.appendChild(item)
    }

    return navBar
}

export default navBar