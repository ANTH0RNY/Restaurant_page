import { createSetElement } from "../util";
import img1 from '../img/icons/location.gif'
import img2 from '../img/chef.jpg'
import '../sass/about.scss'

function AboutUs() {
    const wrapper = createSetElement("div", {
        class: "about-wrapper",
    });

    /*
      1. Location
      2. History
      3. sourcing produce
      4. About Chef and manager
      */
    const title = createSetElement('h1', {
        class: 'about-title'
    })
    title.innerText = 'About Us'
    wrapper.appendChild(title)


    const history = createSetElement("div", {
        class: "history",
    });

    const Map = createSetElement("div", {
        class: "map",
    });

    Map.innerHTML = `<iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869157777!2d36.68224195072277!3d-1.302860269689594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1695901309780!5m2!1sen!2ske" 
                      width="600"
                      height="450"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    const HistoryText = `<h3>Anime Food: A Journey Through Anime-Inspired Dining</h3>

  <p>In the bustling streets of Nairobi, Kenya, in the early 2010s, a unique dining experience emerged - the Manga Café. This restaurant, steeped in the colorful and imaginative world of anime, became a cultural phenomenon.</p>
  
  <p>The concept was born from the passion of a group of anime enthusiasts who wanted to create a space where fans could immerse themselves in their favorite shows and share their excitement with fellow otaku. The first Manga Café opened its doors in Akihabara, Tokyo's Electric Town, known as the epicenter of anime and manga culture.</p>
  
  <p>The restaurant's interior was a vibrant blend of iconic anime posters, life-sized figurines, and themed decor, transporting diners into the worlds of their beloved series. Each dining area represented a different anime, creating a diverse experience for patrons.</p>
  
  <p>The menu was a fusion of Japanese and international cuisine inspired by popular anime dishes. Signature dishes included "Naruto Ramen," "One Piece Bento," and "Dorehidero Gyoza"</p>`

    const location = createSetElement('div', {
        class: 'location'
    })
    const icon = createSetElement('img', {
        class: 'location-icon',
        src: img1,
        alt: 'location icon'
    })
    const localInfo = createSetElement('p', {
        class: "location-p",
    })
    localInfo.innerHTML = `<h3>Location</h3>
    Waiyaki Way, Church Rd, P.O. Box: 67631 - 00200<br> Nairobi Nairobi Kenya`


    // <h2>About Chef</h2>
    const aboutChefText = `
    <h3>Hiroshi Tanaka</h3>
    
    
    <p>Hiroshi Tanaka, born in Tokyo in 1975, grew up immersed in the world of anime and manga. From a young age, he was captivated by the imaginative stories and vibrant characters that these mediums offered. His parents owned a small Japanese restaurant, where Hiroshi often helped out in the kitchen.</p>
    
    <p>After completing his education in culinary arts at a prestigious Tokyo culinary school, Hiroshi honed his skills in various renowned restaurants throughout Japan. He became a skilled chef with a flair for fusion cuisine, drawing inspiration from both traditional Japanese dishes and global culinary trends.</p>
    
    <p>In his early 30s, Hiroshi decided to combine his two passions: anime and food. The idea for the Manga Café was born out of his desire to create a space where anime fans could gather, dine on delicious food, and celebrate their shared love for the art form. His extensive culinary expertise allowed him to craft a menu that featured dishes inspired by the most iconic anime series.</p>
    
    <p>Hiroshi was not just a chef but also a visionary entrepreneur. He invested his savings and secured financial support from investors who believed in his unique concept. He meticulously designed the restaurant's interior, ensuring that every detail would immerse customers in the world of anime.</p>
    
    <p>Hiroshi actively engaged with the anime community, attending conventions, hosting fan gatherings, and collaborating with local artists to showcase their work within his restaurant. He believed in the power of building a strong, inclusive community around his establishment.</p>
    
    <p>Under Hiroshi's leadership, the Manga Café became an iconic destination in Tokyo and beyond, drawing visitors from around the world. His dedication to both the culinary arts and anime culture helped shape the restaurant into a thriving hub for fans and food enthusiasts alike.</p>
    
    <p>As of my last knowledge update in September 2021, Hiroshi Tanaka continues to manage and expand his anime-themed restaurant empire, ensuring that the spirit of anime and delicious cuisine remains a vibrant part of Japan's cultural landscape.<p>`


    const AboutChef = createSetElement('div', {
        class: 'about-chef'
    })
    const aboutP = createSetElement('p', {
        class: 'aboutChef-p'
    })
    const imgChef = createSetElement('img', {
        class: "chef-image",
        src: img2,
        alt: 'chef pic'
    })
    const titlechef = createSetElement('h2')
    titlechef.innerText = 'About Chef'

    aboutP.innerHTML = aboutChefText

    AboutChef.appendChild(titlechef)
    AboutChef.appendChild(imgChef)
    AboutChef.appendChild(aboutP)

    location.appendChild(icon)
    location.appendChild(localInfo)
    history.innerHTML = HistoryText;
    wrapper.appendChild(history)
    wrapper.appendChild(AboutChef)

    wrapper.appendChild(location)
    wrapper.appendChild(Map);

    return wrapper;
}

export default AboutUs;
