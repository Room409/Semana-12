class Collaps {
    constructor(element) {
        this.title = element;
        this.content = element.querySelector('.collaps-content');
        this.title.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
        this.content.classList.toggle('active')
    }
}

const collapsItems = document.querySelectorAll('.collaps');
collapsItems.forEach((item) => {
    new Collaps(item);
});
