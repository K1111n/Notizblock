let notesTitles = ["Ba", "Aufgabe"];
let notes = ["banana", "apple"];

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
  renderNotes();
  noteInputRef.value = "";
  noteTitleInputRef.value = "";
}

function transferToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNotesTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNotesTitle[0]);
  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexNote) {
  trashNotes.splice(indexNote, 1);
  trashNotesTitles.splice(indexNote, 1);
  saveToLocalStorage();
  renderTrashNotes();
}

function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));

  localStorage.setItem("notes", JSON.stringify(notes));

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
