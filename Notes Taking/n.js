document.getElementById('addNote').addEventListener('click', function() {
    const noteContent = document.getElementById('noteContent').value;
    if (noteContent.trim() !== "") {
        addNoteToDOM(noteContent);
        document.getElementById('noteContent').value = ''; 
    }
});

function addNoteToDOM(content) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {
        noteElement.remove();
    });

    noteElement.textContent = content;
    noteElement.appendChild(deleteBtn);

    document.getElementById('notesContainer').appendChild(noteElement);
}
