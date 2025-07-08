let allNotes = {
  notesTitles: ["Ba", "Aufgabe"],
  notes: ["banana", "apple"],
  archiveNotesTitles: [],
  archiveNotes: [],
  trashNotesTitles: [],
  trashNotes: [],
};

function save_get_LocalStorage_render() {
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}
function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);

  let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(notesTitle[0]);

  save_get_LocalStorage_render();
}

function renderNotes() {
  getFromLocalStorage();
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchiveNotes() {
  getFromLocalStorage();
  let archiveContentRef = document.getElementById("archive");
  archiveContentRef.innerHTML = "";
  for (
    let indexArchiveNote = 0;
    indexArchiveNote < allNotes.archiveNotes.length;
    indexArchiveNote++
  ) {
    archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
  }
}

function renderTrashNotes() {
  getFromLocalStorage();
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById("noteInput");
  let noteTitleInputRef = document.getElementById("noteInputForTitle");
  let noteInput = noteInputRef.value;
  let noteTitlesInput = noteTitleInputRef.value;
  if (noteInput == "" || noteTitlesInput == "") {
    return;
  } else {
    noteInput = allNotes.notes.push(noteInput);
    noteTitlesInput = allNotes.notesTitles.push(noteTitlesInput);
    save_get_LocalStorage_render();
    noteInputRef.value = "";
    noteTitleInputRef.value = "";
  }
}

function deleteNote(indexNote) {
  allNotes.trashNotes.splice(indexNote, 1);
  allNotes.trashNotesTitles.splice(indexNote, 1);
  save_get_LocalStorage_render();
}

function saveToLocalStorage() {
  saveToLocalStorage_Notes();
  saveToLocalStorage_Archive();
  saveToLocalStorage_Trash();
}

function saveToLocalStorage_Notes() {
  localStorage.setItem(
    "allNotes.notesTitles",
    JSON.stringify(allNotes.notesTitles)
  );
  localStorage.setItem("allNotes.notes", JSON.stringify(allNotes.notes));
}

function saveToLocalStorage_Archive() {
  localStorage.setItem(
    "allNotes.archiveNotesTitles",
    JSON.stringify(allNotes.archiveNotesTitles)
  );
  localStorage.setItem(
    "allNotes.archiveNotes",
    JSON.stringify(allNotes.archiveNotes)
  );
}

function saveToLocalStorage_Trash() {
  localStorage.setItem(
    "allNotes.trashNotesTitles",
    JSON.stringify(allNotes.trashNotesTitles)
  );
  localStorage.setItem(
    "allNotes.trashNotes",
    JSON.stringify(allNotes.trashNotes)
  );
}

function getFromLocalStorage() {
  getFromLocalStorage_Notes();
  getFromLocalStorage_archiveNotes();
  getFromLocalStorage_trashNotes();
}

function getFromLocalStorage_Notes() {
  let myArrNotesTitles = JSON.parse(
    localStorage.getItem("allNotes.notesTitles")
  );
  if (myArrNotesTitles != null) {
    allNotes.notesTitles = myArrNotesTitles;
  }
  let myArrNotes = JSON.parse(localStorage.getItem("allNotes.notes"));
  if (myArrNotes != null) {
    allNotes.notes = myArrNotes;
  }
}

function getFromLocalStorage_archiveNotes() {
  let myArrArchiveNotesTitles = JSON.parse(
    localStorage.getItem("allNotes.archiveNotesTitles")
  );
  if (myArrArchiveNotesTitles != null) {
    allNotes.archiveNotesTitles = myArrArchiveNotesTitles;
  }
  let myArrArchiveNotes = JSON.parse(
    localStorage.getItem("allNotes.archiveNotes")
  );
  if (myArrArchiveNotes != null) {
    allNotes.archiveNotes = myArrArchiveNotes;
  }
}

function getFromLocalStorage_trashNotes() {
  let myArrtrashNotesTitles = JSON.parse(
    localStorage.getItem("allNotes.trashNotesTitles")
  );
  if (myArrtrashNotesTitles != null) {
    allNotes.trashNotesTitles = myArrtrashNotesTitles;
  }
  let myArrtrashNotes = JSON.parse(localStorage.getItem("allNotes.trashNotes"));
  if (myArrtrashNotes != null) {
    allNotes.trashNotes = myArrtrashNotes;
  }
}
