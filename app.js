const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"));
}

function dragend(e) {
  e.target.className = "item";
}

function dragover(e) {
  e.target.classList.add("hovered");
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
}
function dragleave(e) {
  e.target.classList.remove("hovered");
}
function dragdrop(e) {
  e.preventDefault();
  e.target.append(item);
  e.target.classList.remove("hovered");
}
