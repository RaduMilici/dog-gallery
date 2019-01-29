export default class DogPicture extends HTMLElement {
    set src(value) {
        console.log(value);
        this.innerHTML = `<img src="${value}">`;
    }
}

customElements.define('dog-picture', DogPicture);