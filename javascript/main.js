const boxs = document.querySelectorAll('.box');
const draggable = document.querySelector('.draggable');

draggable.addEventListener('dragstart', dragStart);

draggable.addEventListener('dragsend', dragEnd);

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}

boxs.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', dragDrop)
})

function dragOver(e) {
    e.preventDefault();
    this.appendChild(draggable)
}

function dragDrop() {
    this.appendChild(draggable)
}