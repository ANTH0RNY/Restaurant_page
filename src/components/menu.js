import { createSetElement } from "../util";
import menuItem from "./menuItems";
import '../sass/menu.scss'

function createMenu() {
  const body = createSetElement("div", { class: "menuBody" });

  menuItem.forEach((value, index) => {
    const menuPart = createSetElement("div", {
      class: "menu-part",
    });

    const title = createSetElement("h3", {
      class: "menu-title",
      id: `menu-title-${index}`,
    });

    title.innerText = value.title;
    menuPart.appendChild(title);

    value.items.forEach((item, itemIndex) => {
      const itemWrapper = createSetElement("div", {
        class: "menu-item",
        id: `menu-item-${itemIndex}`,
      });
      const top = createSetElement("div", { class: "menu-top" });
      const mid = createSetElement("div", { class: "menu-second" });
      const bottom = createSetElement("div", { class: "menu-bottom" });

      const menuName = createSetElement("h5", { class: "menu-name" });
      const price = createSetElement("small", { class: "menu-price" });
      const description = createSetElement("p", { class: "menu-p" });

      menuName.innerText = item.name;
      price.innerText = '$40'; // item.price
      description.innerText = item.description;

      top.appendChild(menuName);
      bottom.appendChild(description);
      top.appendChild(mid)
      top.appendChild(price);
      itemWrapper.appendChild(top);
      // itemWrapper.appendChild(second);
      itemWrapper.appendChild(bottom);

      menuPart.appendChild(itemWrapper);
    });
    body.appendChild(menuPart);
  });

  return body;
}

export default createMenu