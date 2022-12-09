let checklist = document.querySelectorAll(".richtlijnen input[type=checkbox]");
let progression = document.querySelector("#waarneembaar-meter");
console.log(checklist.length);

checklist.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    progression.value = document.querySelectorAll(
      ".richtlijnen input[type=checkbox]:checked"
    ).length;
  });
});
