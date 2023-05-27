class Dropdown {
    constructor(element) {
        this.dropdown = element;
        this.button = element.querySelector('.dropbtn');
        this.content = element.querySelector('.dropdown-content');

        this.button.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
        this.dropdown.classList.toggle('active');
    }
}

const dropdown = new Dropdown(document.querySelector('.dropdown'));