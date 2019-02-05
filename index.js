import fetchData from "./fetch.js";
import "./components/dogPicture.js";
import "./components/notFound.js";
const gallery = document.querySelector("#gallery");

async function onBreedSearch() {
    clearGallery();

    const imageURLs = await fetchData(`https://dog.ceo/api/breed/${this.value}/images/random/3`);

    imageURLs.forEach(URL => {
        const element = document.createElement('dog-picture');
        element.src = URL;
        gallery.appendChild(element);
    });

    const notFoundElement = document.createElement('not-found');
    gallery.appendChild(notFoundElement);
}

function clearGallery() {
    while(gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
}

document.querySelector("#searchBreed").addEventListener("input", onBreedSearch);