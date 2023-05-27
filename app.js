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


////////////////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////

class Modal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.openBtn = document.getElementById('openModalBtn');
        this.closeBtn = document.getElementsByClassName('close')[0];
        this.acceptBtn = document.getElementById('acceptBtn');
        this.cancelBtn = document.getElementById('cancelBtn');

        this.openBtn.addEventListener('click', () => this.modal.style.display = 'block');
        [this.closeBtn, this.acceptBtn, this.cancelBtn].forEach(btn => btn.addEventListener('click', () => this.modal.style.display = 'none'));
    }
}

const modal = new Modal();
