const newPostButton = document.getElementById("newPost");
const form = document.getElementById("form");
const editButton = document.getElementById("edit");
const deleteButton = document.getElementById("delete");

newPostButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

deleteButton.addEventListener("click", async function() {
  await fetch(`/posts/${this.dataset.id}`, { method: "DELETE" });
  window.location.reload(true);
  return;
});

editButton.addEventListener("click", async function() {
  fetch(`/posts/${this.dataset.id}`, { method: "PATCH" }).then(console.log);
});
