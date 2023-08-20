function getElement(selector){
    return document.querySelector(selector)
}

 function createElement(type){
    return document.createElement(type)
}

function setAttributes(element, attributes){
    // Object.entries(attributes).forEach()
    for (const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }
}

export {
    getElement,
    createElement,
    setAttributes
}