import fetchData from "./fetch.js";
import "./dogPicture.js";

async function onLoad() {
    const imageURLs = await fetchData("https://dog.ceo/api/breeds/image/random/3");

    imageURLs.forEach(URL => {
        const element = document.createElement('dog-picture');
        element.src = URL;
        document.body.appendChild(element);
    });
}

window.addEventListener("load", onLoad);