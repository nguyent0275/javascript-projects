const noteBtn = document.querySelector("#add-btn"),
  noteTitle = document.querySelector("#note-title"),
  noteText = document.querySelector("#note-text"),
  clear = document.querySelector(".clear");

function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
}

function checkInputFields() {
  if (!noteTitle.value || !noteText.value) {
    return alert("Please add a title or details");
  }
}

noteBtn.addEventListener("click", addNote);
function addNote(e) {
  e.preventDefault();

  if (!noteTitle.value || !noteText.value) {
    return alert("Please add a title or details");
  }
  getNotes(); // notesObj array

  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  document.querySelector("form").reset();
  renderNotes();
}

function renderNotes() {
  let noteEl = document.getElementById("notes");
  getNotes(); // from local storage
  if (notesObj.length === 0) {
    noteEl.innerHTML = "No notes added, Please add a note!";
    return;
  }
  let html = "";
  notesObj.forEach(function (el, index) {
    html += `<div class="note">
                <div class="note-cta">
                  <p class="note-counter">Note ${index + 1}</p>
                  <div class="note-cta-btn">
                    <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">
                      <i class="fas fa-trash"></i> Delete
                    </button>
                    <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
                      <i class="fas fa-edit"></i> Edit
                    </button>
                  </div>
                </div>
                <hr />
                <h3 class="note-title">${el.title}</h3>
                <p class="note-text">${el.text}</p>
              </div>`;
    noteEl.innerHTML = html;
  });
}

function deleteNote(index) {
  let confirmDel = confirm("Delete this note");
  if (!confirmDel) return;
  getNotes();
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  renderNotes();
}

clear.addEventListener("click", deleteAllNotes);
function deleteAllNotes() {
  let confirmAllDel = confirm("Delete All Notes?");
  if (!confirmAllDel) return;
  localStorage.clear();
  renderNotes();
}

function editNote(index) {
  if (noteTitle.value || noteText.value) {
    return alert("Please clear the input fields");
  }
  getNotes();

  noteTitle.value = notesObj[index].title;
  noteText.value = notesObj[index].text;

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  renderNotes();
}

renderNotes();
