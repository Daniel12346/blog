const newPostButton = document.getElementById("newPost");
const form = document.getElementById("form");
const editButtons = document.querySelectorAll(".edit");
const deleteButtons = document.querySelectorAll(".delete");

newPostButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

deleteButtons.forEach(button =>
  button.addEventListener("click", async function() {
    await fetch(`/posts/${this.dataset.id}`, { method: "DELETE" });
    window.location.reload(true);
    return;
  })
);

editButtons.forEach(
  button >=
    button.addEventListener("click", async function() {
      await fetch(`/posts/${this.dataset.id}/edit`);
      const json = await res.json();
      return json;
    })
);
