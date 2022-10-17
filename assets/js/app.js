const tombol = document.getElementById('btn');
const input = document.getElementById('input');
const box = document.getElementById('box');

tombol.addEventListener('click', () => {

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    content.setAttribute('id', 'content');

    const note = document.createElement('div');
    note.setAttribute('class', 'note');

    const isi = document.createElement('h2');
    isi.innerText = input.value;
     
    const deleted = document.createElement('button');
    deleted.setAttribute('class', 'btn2');
    deleted.setAttribute('id', 'deleted');
    deleted.innerText = 'hapus';
    deleted.addEventListener('click', () => {
        content.remove()
    });
     
    box.appendChild(content);
    content.appendChild(note);
    note.appendChild(isi);
    note.appendChild(deleted);

});