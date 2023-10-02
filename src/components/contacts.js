import '../sass/contacts.scss'
import img1 from "../img/icons/phone.png"
import img2 from "../img/icons/address.png"
import img3 from "../img/icons/email.png"
import {createSetElement, createFullElement} from '../util'


function createContact(){
const wrapper = createSetElement("div",{
    class:"contacts"
})
const contactInfo=createSetElement("div",{
    class:"body"
})
const phone=createFullElement('p',{
    class:"phone info"
}, `<span><img src=${img1} alt="phone number"/></span> +2547123456789`)
const address=createFullElement('p',{
    class:"address"
},`
    <span><img src=${img2} alt=""address/></span> Waiyaki Way, Church Rd, P.O. Box: 67631 - 00200<br> Nairobi Nairobi Kenya
`)
const email=createFullElement('p',{
    class: "email"
},`<span><img src=${img3} alt="email"/></span>animefood@gmail.com`)

contactInfo.appendChild(phone)
contactInfo.appendChild(email)
contactInfo.appendChild(address)
wrapper.appendChild(contactInfo)
return wrapper
}

export default createContact