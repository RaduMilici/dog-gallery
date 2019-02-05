export default class NotFound extends HTMLElement {
    constructor() {
        super();
        this.innerHTML= `Could not find breed`;
    }
}

customElements.define('not-found', NotFound);