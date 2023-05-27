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
