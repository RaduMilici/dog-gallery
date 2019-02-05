import fetchData from "./fetch.js";
import "./dogPicture.js";

async function onBreedSearch() {
    clearGallery();

    const imageURLs = await fetchData(`https://dog.ceo/api/breed/${this.value}/images/random/3`);

    imageURLs.forEach(URL => {
        const element = document.createElement('dog-picture');
        element.src = URL;
        document.querySelector("#gallery").appendChild(element);
    });
}

function clearGallery() {
    const gallery = document.querySelector("#gallery");

    while(gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
}

document.querySelector("#searchBreed").addEventListener("input", onBreedSearch);