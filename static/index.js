const form = document.getElementById("diary-input-form");
const entryNameInput = document.getElementById("entry-name-input");
const entryContentInput = document.getElementById("diary-input-content");
const entriesContainer = document.querySelector(".entry");


// Adding new diary entries
form.addEventListener("submit", function (event) {
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


// Deleting new diary entries

document.querySelectorAll(".delete-entry").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let parentNode = this.parentNode;
    parentNode.parentNode.removeChild(parentNode);
  });
});



function createEntry(entry) {

  const entries = document.getElementById("entries-wrap");

  const a = document.createElement("a");
  a.classList.add("entry-link")
  entries.appendChild(a);

  const img = document.createElement("img");
  img.classList.add("entry-img")
  a.appendChild(img);

  const header = document.createElement("h3");
  header.classList.add("entry-name")
  header.textContent = entry["name"];
  a.appendChild(header);

  const text = document.createElement("p");
  text.classList.add("entry-description")
  text.textContent = entry["content"]
  a.appendChild(text)
  // Add a delete button
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete-entry")
  a.appendChild(button);



}


async function getEntries() {

  // Get a link to the container
  const entries = document.getElementById("entries-wrap");

  // Request all the goats from the API
  const res = await fetch("http://localhost:3000/Entries");

  // Extract the JSON data from the response
  const data = await res.json();

  // For each goat, create an HTML element (or collection of elements) and add it to the herd container
  data.forEach(e => { createEntry(e); console.log(e) });
};

getEntries()



document.querySelectorAll(".delete-entry").forEach(function(button) {
    button.addEventListener("click", function(e) {
      let parentNode = this.parentNode;
      parentNode.parentNode.removeChild(parentNode);
    });
  });
  


  const noteForm = document.querySelector("#diary-input-form")
  noteForm.addEventListener("submit", (e) => { // Select form and add event listener to the submit button
    e.preventDefault() // Prevent page refresh on click
    const userData = { // 
      entryName: document.querySelector("#entry-name-input").value,
      entryContent: document.querySelector("#diary-input-content").value,
    } // Select input values of username and password and save in an object
    const sendNote = async () => {
      try {
        const data = await axios.post("http:localhost:3000/", userData)
        document.querySelector("#entry-name-input").value = ""
        document.querySelector("#diary-input-content").value = ""
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    sendNote()
  })

