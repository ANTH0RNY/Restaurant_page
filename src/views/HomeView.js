import createImageSlider from "../components/scroll";
import createMainBody from "../components/body";
// import { createSetElement } from "../util";

function HomeView(mountPoint) {
    const imageSlider = createImageSlider()

    // const main = createSetElement("div", { class: "body main" })
    const mainBody=createMainBody()
    mountPoint.appendChild(imageSlider)
    mountPoint.appendChild(mainBody)

}

export default HomeView