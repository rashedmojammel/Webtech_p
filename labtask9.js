// Load existing notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

const notesContainer = document.getElementById("notesContainer");
const uploadForm = document.getElementById("uploadForm");

// Function to display notes
function renderNotes() {
  notesContainer.innerHTML = "";
  if (notes.length === 0) {
    notesContainer.innerHTML = "<p style='color:gray;'>No notes uploaded yet.</p>";
    return;
  }

  notes.forEach(note => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <h3>${note.title}</h3>
      <p>Subject: <strong>${note.subject}</strong></p>
      <p>${note.description}</p>
      <p>📄 ${note.fileName}</p>
      <button onclick="downloadNote('${note.fileName}')">Download</button>
    `;
    notesContainer.appendChild(card);
  });
}

// Function to handle file upload form
uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const description = document.getElementById("description").value.trim();
  const fileUpload = document.getElementById("fileUpload").files[0];

  if (!title || !subject || !fileUpload) {
    alert("Please fill in all fields.");
    return;
  }

  const newNote = {
    title,
    subject,
    description,
    fileName: fileUpload.name
  };

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  uploadForm.reset();
  renderNotes();
  alert("✅ Note uploaded successfully!");
});

// Dummy download function
function downloadNote(fileName) {
  alert(`Simulating download of: ${fileName}`);
}

// Display notes on page load
renderNotes();
