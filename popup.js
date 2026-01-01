document.getElementById("generate").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number").textContent = randomNumber;
});
