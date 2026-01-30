document.querySelector(".browseButton").addEventListener("click", function () {
  const hiddenCases = document.querySelectorAll(".companyCase.hidden");

  hiddenCases.forEach((v) => {
    v.classList.remove("hidden");
    v.classList.add("show");
  });

  this.style.display = "none";
});
