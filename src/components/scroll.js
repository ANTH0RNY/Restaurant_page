import { createSetElement } from "../util";
import img1 from "../img/scrollbar/1232732.jpg";
import img2 from "../img/scrollbar/assorted.jpg";
import img3 from "../img/scrollbar/balls.gif";
import img4 from "../img/scrollbar/noodle.gif";
import "../sass/scroll.scss";

const images = [img1, img2, img3, img4];

function createImageSlider() {
    /*
        Creates the image slide
        */

    let activeLink = 0;
    let links = [];

    const container = createSetElement("section", {
        class: "sections image-slider",
    });
    const viewWindow = createSetElement("div", { class: "window" });
    const wrapper = createSetElement("div", { id: "wrapper" });

    const navLinks = createSetElement("div", { class: "navLinks" });
    const ul = createSetElement("ul", { class: "ul" });

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
        li.itemID = index;
        li.addEventListener('click', (e) => {
            changePosition(e.target)
        })
        links.push(li);
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

    const btns = [btn1, btn2];

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.dataset.side === "left") {
                const id = activeLink <= 0 ? links.length - 1 : activeLink - 1;
                const link = links[id];
                changePosition(link);
            } else if (e.target.dataset.side === "right") {
                const id = activeLink >= links.length - 1 ? 0 : activeLink + 1;
                const link = links[id];
                changePosition(link);
            }
        });
    });

    function changePosition(link) {
        // console.log(link)
        links.forEach((linkItem) => {
            linkItem.classList.remove("active");
        });

        activeLink = link.itemID

        const no = parseInt(link.dataset.number) - 1
        const position = no * -100

        const translateValue = `translate3d(${position}vw, 0px, 0px)`
        wrapper.style.transform = translateValue

        link.classList.add('active')

    }

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
