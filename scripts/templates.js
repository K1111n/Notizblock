function getNoteTemplate(indexNote) {
  return `
      <p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="transferToTrash(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
      <p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}
