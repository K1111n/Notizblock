function getNoteTemplate(indexNote) {
  return `
      <p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}
      <button onclick="transferFromNotesToArchive(${indexNote})">A</button>
      <button onclick="transferFromNoteToTrash(${indexNote})">X</button></p>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
  return `
      <p>+ title: ${archiveNotesTitles[indexArchiveNote]} -> ${archiveNotes[indexArchiveNote]}
      <button onclick="transferFromArchiveToNotes(${indexArchiveNote})">Re</button>
      <button onclick="transferFromArchiveToTrash(${indexArchiveNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
      <p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}
      <button onclick="transferFromTrashToNotes(${indexTrashNote})">Re</button>
      <button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}
