function getNoteTemplate(indexNote) {
  return `
      <div>
        <p>
          <div class="note">
            <b>${allNotes.notesTitles[indexNote]}:</b>  ${allNotes.notes[indexNote]}
          </div>
          <div>
            <button onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')">A</button>
            <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">X</button>
          </div>
        </p>        
      </div>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
  return `
      <p><div class="note"><b>${allNotes.archiveNotesTitles[indexArchiveNote]}</b> : ${allNotes.archiveNotes[indexArchiveNote]}</div>
      <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')">Re</button>
      <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
        <p><div class="note"><b>${allNotes.trashNotesTitles[indexTrashNote]}</b> : ${allNotes.trashNotes[indexTrashNote]}</div>
        <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')"">Re</button>
        <button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}
