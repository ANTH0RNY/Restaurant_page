import { createSetElement } from "../util";
import img1 from "../img/scrollbar/1232732.jpg";
import img2 from "../img/scrollbar/assorted.jpg";
import img3 from "../img/scrollbar/balls.gif";
import img4 from "../img/scrollbar/noodle.gif";
import "../sass/scroll.scss";

const images = [img1,

    img2, img3, img4];

function createImageSlider() {
    /*
      Creates the image slide
      */
    const container = createSetElement("section", {
        class: "sections image-slider",
    });
    const viewWindow = createSetElement("div", { class: "window" });
    const wrapper = createSetElement("div", { id: "wrapper" });

    const navLinks = createSetElement("div", { class: "navLinks" });
    const ul = createSetElement("ul");

    images.forEach((image, index) => {
        const img = createSetElement("img", {
            src: image,
            alt: `image-${index + 1}`,
            id: `item${index + 1}`,
            class: "content",
        });
        wrapper.appendChild(img);

        const li = createSetElement("li", {
            class: "links",
            "data-number": index + 1,
        });
        ul.appendChild(li);
    });
    const btn1 = createSetElement("button", {
        class: "btn left",
        "data-side": "left",
    });
    const btn2 = createSetElement("button", {
        class: "btn right",
        "data-side": "right",
    });
    btn1.innerHTML = "&#10094;";
    btn2.innerHTML = "&#10093;";

    viewWindow.appendChild(wrapper);
    viewWindow.appendChild(btn1);
    viewWindow.appendChild(btn2);

    container.appendChild(viewWindow);

    navLinks.appendChild(ul);
    container.appendChild(navLinks);

    return container;
}

export default createImageSlider;
