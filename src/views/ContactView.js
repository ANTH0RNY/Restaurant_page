import createContact from "../components/contacts";
import { createSetElement } from "../util";


function ContactView(){
    const body=createSetElement('section',{
        class: "wrapper-section"
    })
    body.appendChild(createContact())
    return body
}

export default  ContactView