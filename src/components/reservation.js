import { createSetElement, createFullElement } from "../util";
import "../sass/reservation.scss"

function createReservation() {
    const wrapper = createSetElement("div", {
        class: "res",
    })
    const form = createSetElement('fieldset', {
        class: 'reservation'
    })
    
    const title = createSetElement("legend", {
        class: "legend"
    })
    title.innerText = "Make a Reservation"
    
    form.appendChild(title)
    const formBody=createSetElement("div", {
        class:"form-body"
    })
    form.appendChild(formBody)

    const name = createSetElement('input', {
        type: 'text',
        class: "name",
        required: "",
        placeholder: "Name"
    })
    formBody.appendChild(name)

    const email = createSetElement('input', {
        class: "email",
        type: 'email',
        placeholder: "Email"
    })
    formBody.appendChild(email)

    const phoneNumber = createSetElement('input', {
        class: "number",
        type: "number",
        placeholder: "Phone Number"
    })
    formBody.appendChild(phoneNumber)

    const address = createSetElement('input', {
        class: "address",
        type: "text",
        placeholder: "Address"
    })
    formBody.appendChild(address)

    const selector = createSetElement('select', {
        class: 'selector'
    })

    const option0 = createSetElement('option', {
        class: "label",
        value: ""
    })
    const option1 = createSetElement('option', {
        class: "options",
        value: "vip"
    })
    const option2 = createSetElement('option', {
        class: "options",
        value: "regular"
    })
    option0.innerText = "--Type of Reservation--"
    option1.innerText = 'VIP'
    option2.innerText = 'regular'
    selector.appendChild(option0)
    selector.appendChild(option1)
    selector.appendChild(option2)
    formBody.appendChild(selector)


    const noSeats = createSetElement('input', {
        class: "seats",
        type: "number",
        placeholder: "Number of seats"
    })
    formBody.appendChild(noSeats)

    const textArea = createSetElement('textarea', {
        class: "request",
        placeholder: "Any Special request"
    })
    formBody.appendChild(textArea)
    const btn=createFullElement('button',{
        class:"button"
    }, 'Sumbit')

    form.appendChild(btn)
    wrapper.appendChild(form)

    return wrapper
}

export default createReservation