import createImageSlider from "../components/scroll";
import createMainBody from "../components/body";
import { createSetElement } from "../util";

function HomeView() {
    const imageSlider = createImageSlider()

    const main = createSetElement("div", { class: "Home" })
    const mainBody=createMainBody()
    main.appendChild(imageSlider)
    main.appendChild(mainBody)
    
    return main
}

export default HomeView