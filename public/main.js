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
  const res = await fetch(`/posts/${this.dataset.id}/edit`);
  //window.location.reload(true);
  const json = await res.json();
  console.log(json);

  return json;
});
