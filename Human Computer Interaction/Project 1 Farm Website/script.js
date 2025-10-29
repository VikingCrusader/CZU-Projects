function showScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".controls button")
    .forEach((b) => b.classList.remove("active"));

  document.getElementById(screenId).classList.add("active");
  document.getElementById("btn-" + screenId).classList.add("active");
}
