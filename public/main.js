const newPost = document.getElementById("newPost");
const form = document.getElementById("form");

newPost.addEventListener("click", () => {
  form.classList.toggle("hidden");
});
