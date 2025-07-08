let notesTitles = ["Ba", "Aufgabe"];
let notes = ["banana", "apple"];

let archiveNotesTitles = [];
let archiveNotes = [];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
  getFromLocalStorage();
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchiveNotes() {
  getFromLocalStorage();
  let archiveContentRef = document.getElementById("archive");
  archiveContentRef.innerHTML = "";
  for (
    let indexArchiveNote = 0;
    indexArchiveNote < archiveNotes.length;
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
    indexTrashNote < trashNotes.length;
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
  noteInput = notes.push(noteInput);
  noteTitlesInput = notesTitles.push(noteTitlesInput);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
  noteInputRef.value = "";
  noteTitleInputRef.value = "";
}

function transferFromNotesToArchive(indexNote) {
  let archiveNote = notes.splice(indexNote, 1);
  archiveNotes.push(archiveNote[0]);
  let archiveNotesTitle = notesTitles.splice(indexNote, 1);
  archiveNotesTitles.push(archiveNotesTitle[0]);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function transferFromNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNotesTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNotesTitle[0]);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function transferFromArchiveToNotes(indexArchiveNote) {
  let archiveNote = archiveNotes.splice(indexArchiveNote, 1);
  notes.push(archiveNote[0]);
  let notesTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
  notesTitles.push(notesTitle[0]);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function transferFromArchiveToTrash(indexArchiveNote) {
  let archiveNote = archiveNotes.splice(indexArchiveNote, 1);
  trashNotes.push(archiveNote[0]);
  let trashNotesTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
  trashNotesTitles.push(trashNotesTitle[0]);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function transferFromTrashToNotes(indexTrashNote) {
  let trashNote = trashNotes.splice(indexTrashNote, 1);
  notes.push(trashNote[0]);
  let notesTitle = trashNotesTitles.splice(indexTrashNote, 1);
  notesTitles.push(notesTitle[0]);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function deleteNote(indexNote) {
  trashNotes.splice(indexNote, 1);
  trashNotesTitles.splice(indexNote, 1);
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));

  localStorage.setItem("notes", JSON.stringify(notes));

  localStorage.setItem(
    "archiveNotesTitles",
    JSON.stringify(archiveNotesTitles)
  );

  localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));

  localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));

  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function getFromLocalStorage() {
  let myArrnotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
  if (myArrnotesTitles != null) {
    notesTitles = myArrnotesTitles;
  }

  let myArrnotes = JSON.parse(localStorage.getItem("notes"));
  if (myArrnotes != null) {
    notes = myArrnotes;
  }

  let myArrArchiveNotesTitles = JSON.parse(
    localStorage.getItem("archiveNotesTitles")
  );
  if (myArrArchiveNotesTitles != null) {
    archiveNotesTitles = myArrArchiveNotesTitles;
  }

  let myArrArchiveNotes = JSON.parse(localStorage.getItem("archiveNotes"));
  if (myArrArchiveNotes != null) {
    archiveNotes = myArrArchiveNotes;
  }

  let myArrtrashNotesTitles = JSON.parse(
    localStorage.getItem("trashNotesTitles")
  );
  if (myArrtrashNotesTitles != null) {
    trashNotesTitles = myArrtrashNotesTitles;
  }

  let myArrtrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  if (myArrtrashNotes != null) {
    trashNotes = myArrtrashNotes;
  }
}
