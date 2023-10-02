import createImageSlider from "../components/scroll";
import createMainBody from "../components/body";
import { createSetElement } from "../util";

function HomeView() {
    const imageSlider = createImageSlider()

    const main = createSetElement("section", { class: "wrapper-section" })
    const mainBody=createMainBody()
    main.appendChild(imageSlider)
    main.appendChild(mainBody)
    
    return main
}

export default HomeView