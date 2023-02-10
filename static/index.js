const form = document.getElementById("diary-input-form");
const entryNameInput = document.getElementById("entry-name-input");
const entryContentInput = document.getElementById("diary-input-content");
const entriesContainer = document.querySelector(".entry");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const entryName = entryNameInput.value;
  const entryContent = entryContentInput.value;

  const newEntry = document.createElement("a");
  newEntry.href = "#";
  newEntry.classList.add("entry-link");

  const entryImg = document.createElement("img");
  entryImg.classList.add("entry-img");
  newEntry.appendChild(entryImg);

  const entryNameElement = document.createElement("h3");
  entryNameElement.classList.add("entry-name");
  entryNameElement.textContent = entryName;
  newEntry.appendChild(entryNameElement);

  const entryDescription = document.createElement("p");
  entryDescription.classList.add("entry-description");
  entryDescription.textContent = entryContent;
  newEntry.appendChild(entryDescription);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-entry");
  deleteButton.textContent = "Delete";
  newEntry.appendChild(deleteButton);

  entriesContainer.appendChild(newEntry);

  entryNameInput.value = "";
  entryContentInput.value = "";
});
