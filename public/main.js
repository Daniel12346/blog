const newPostButton = document.getElementById("newPost");
const form = document.getElementById("form");
const editButton = document.getElementById("edit");
const deleteButton = document.getElementById("delete");

newPostButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

editButton.addEventListener("click", () => {});
