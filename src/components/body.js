import { LoremIpsum } from "lorem-ipsum"

import { createSetElement } from "../util"
import img1 from '../img/home_main/image1.jpg'
import img2 from '../img/home_main/image2.jpg'
import img3 from '../img/home_main/image3.jpg'
import img4 from '../img/home_main/image4.jpg'

import '../sass/mainBody.scss'

const lorem = new LoremIpsum({
    sentencesPerParagraph:{
        max: 8,
        min: 4
    },
    wordsPerSentence:{
        max: 12,
        min: 4
    }
})

const images = [
    {
     img: img1,
     text: lorem.generateSentences(5)
    }
    , {
        img: img2,
        text:lorem.generateSentences(5)
    }
    , 
    {
        img:img3,
        text:lorem.generateSentences(5)
    }
    ,
    {
        img:img4,
        text: lorem.generateSentences(5)
    }
]

function createMainBody() {
    const body = createSetElement('div', {
        class: 'main-body'
    })

    images.forEach((image, index)=>{
        const img=createSetElement('img', {
            class: 'img',
            alt:`image-${index + 1}`,
            src: image.img
        })

        const p=createSetElement('p', {
            class: 'p'
        })
        p.innerText=image.text

        body.appendChild(img)
        body.appendChild(p)
    })
    return body
}

export default createMainBody