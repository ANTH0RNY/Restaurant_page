import HomeView from "../views/HomeView"
import createMenu from "./menu"
// import createContact from "./contacts"
import ContactView from "../views/ContactView"
import createReservation from "./reservation"
import AboutUs from "./About"

const listItems = [
    {
        title: "Anime Food",
        el: HomeView()
    },
    {
        title: 'Menu',
        el: createMenu()
    },
    {
        title: 'Reservation',
        el: createReservation()
    },
    {
        title: 'About',
        el: AboutUs()
    },
    {
        title: 'Contacts',
        el: ContactView()
    },
]

export default listItems